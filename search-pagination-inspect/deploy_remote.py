import datetime
import hashlib
import os
import shlex
import sys
import time

import paramiko


HOST = os.environ["UBOO_SSH_HOST"]
USER = os.environ["UBOO_SSH_USER"]
PASSWORD = os.environ["UBOO_SSH_PASSWORD"]
CONTAINER = "L_ubooquity"
PROXY_CONTAINER = "L_ubooquity_port_proxy"
JAR_PATH = "/app/ubooquity/Ubooquity.jar"
LOCAL = os.path.abspath("Ubooquity.jar")

with open(LOCAL, "rb") as jar_file:
    LOCAL_HASH = hashlib.sha256(jar_file.read()).hexdigest()

stamp = datetime.datetime.now().strftime("%Y%m%d-%H%M%S")
REMOTE_NEW = f"/tmp/Ubooquity.search-pagination-{LOCAL_HASH[:12]}.jar"
REMOTE_BACKUP = f"/tmp/Ubooquity.container-before-search-pagination-{stamp}.jar"
REMOTE_VERIFY = f"/tmp/Ubooquity.search-pagination-verify-{stamp}.jar"
REMOTE_ROLLBACK = f"/tmp/rollback-ubooquity-search-pagination-{stamp}.sh"

client = paramiko.SSHClient()
client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
client.connect(
    HOST,
    username=USER,
    password=PASSWORD,
    timeout=10,
    auth_timeout=10,
    look_for_keys=False,
    allow_agent=False,
)


def run(command, check=True):
    _, stdout, stderr = client.exec_command(command)
    output = stdout.read().decode("utf-8", "replace").strip()
    error = stderr.read().decode("utf-8", "replace").strip()
    status = stdout.channel.recv_exit_status()
    print(f"$ {command}\n{output}")
    if error:
        print(f"[stderr] {error}")
    print(f"[exit {status}]")
    if check and status != 0:
        raise RuntimeError(f"command failed with {status}: {command}")
    return status, output, error


sftp = client.open_sftp()
sftp.put(LOCAL, REMOTE_NEW)
rollback = f"""#!/bin/sh
set -eu
docker stop {CONTAINER} >/dev/null
docker cp {REMOTE_BACKUP} {CONTAINER}:{JAR_PATH}
docker start {CONTAINER} >/dev/null
docker restart {PROXY_CONTAINER} >/dev/null
echo ROLLBACK_OK container={CONTAINER} backup={REMOTE_BACKUP}
"""
with sftp.file(REMOTE_ROLLBACK, "w") as rollback_file:
    rollback_file.write(rollback)
sftp.chmod(REMOTE_ROLLBACK, 0o700)
sftp.close()

print(f"uploaded={REMOTE_NEW}")
print(f"rollback_script={REMOTE_ROLLBACK}")
print(f"local_sha256={LOCAL_HASH}")


def deploy_and_verify(label):
    run(f"docker stop {CONTAINER}")
    run(f"docker cp {shlex.quote(REMOTE_NEW)} {CONTAINER}:{JAR_PATH}")
    run(f"docker start {CONTAINER}")
    run(f"docker restart {PROXY_CONTAINER}")
    time.sleep(12)
    _, running, _ = run(f"docker inspect -f '{{{{.State.Running}}}}' {CONTAINER}")
    if running.strip() != "true":
        raise RuntimeError("container did not remain running")
    run(f"docker cp {CONTAINER}:{JAR_PATH} {shlex.quote(REMOTE_VERIFY)}")
    _, verify_hash_output, _ = run(f"sha256sum {shlex.quote(REMOTE_VERIFY)}")
    if verify_hash_output.split()[0].lower() != LOCAL_HASH:
        raise RuntimeError("container JAR hash mismatch")
    run(f"docker logs --since 45s --tail 80 {CONTAINER}", check=False)
    print(f"{label}_OK sha256={LOCAL_HASH}")


try:
    _, uploaded_hash_output, _ = run(f"sha256sum {shlex.quote(REMOTE_NEW)}")
    if uploaded_hash_output.split()[0].lower() != LOCAL_HASH:
        raise RuntimeError("uploaded JAR hash mismatch")

    run(f"docker inspect {CONTAINER} >/dev/null")
    run(f"docker exec {CONTAINER} sh -c 'test -f {JAR_PATH}'")
    run(f"docker cp {CONTAINER}:{JAR_PATH} {shlex.quote(REMOTE_BACKUP)}")
    _, baseline_hash_output, _ = run(f"sha256sum {shlex.quote(REMOTE_BACKUP)}")
    baseline_hash = baseline_hash_output.split()[0].lower()
    run(f"sh -n {shlex.quote(REMOTE_ROLLBACK)}")

    deploy_and_verify("FIRST_DEPLOY")

    run(shlex.quote(REMOTE_ROLLBACK))
    time.sleep(8)
    run(f"docker cp {CONTAINER}:{JAR_PATH} {shlex.quote(REMOTE_VERIFY)}")
    _, rollback_hash_output, _ = run(f"sha256sum {shlex.quote(REMOTE_VERIFY)}")
    if rollback_hash_output.split()[0].lower() != baseline_hash:
        raise RuntimeError("rollback JAR hash mismatch")
    print(f"ROLLBACK_VERIFIED sha256={baseline_hash}")

    deploy_and_verify("FINAL_DEPLOY")
    run(
        f"docker ps --filter name=^{CONTAINER}$ "
        "--format '{{.Names}}|{{.Status}}|{{.Image}}'"
    )
    run(
        "wget -q -S -O /dev/null "
        "http://127.0.0.1:2202/ubooquity/ 2>&1 | head -n 8",
        check=False,
    )
    print("DEPLOYMENT_COMPLETE")
    print(f"container={CONTAINER}")
    print(f"jar_path={JAR_PATH}")
    print(f"backup={REMOTE_BACKUP}")
    print(f"rollback={REMOTE_ROLLBACK}")
    print(f"sha256={LOCAL_HASH}")
except Exception:
    print("DEPLOYMENT_ERROR: attempting rollback", file=sys.stderr)
    try:
        run(shlex.quote(REMOTE_ROLLBACK), check=False)
    except Exception as rollback_error:
        print(f"rollback_attempt_error={rollback_error!r}", file=sys.stderr)
    raise
finally:
    client.close()

# Ubooquity Docker 替换 Jar 操作记录

本文档记录把本项目修改后的 `Ubooquity.jar` 替换到正在运行的 Ubooquity Docker 容器中的完整流程。

当前示例环境：

- Docker 主机：`192.168.13.1`
- 容器名：`ubooquity`
- 镜像：`lscr.io/linuxserver/ubooquity:latest`
- 容器内实际 Jar 路径：`/app/ubooquity/Ubooquity.jar`

## 1. 准备新的 Jar

在本项目本地完成主题修改并重新打包后，确认本地文件存在：

```powershell
Get-FileHash -Algorithm SHA256 .\Ubooquity.jar
```

记录输出的 SHA256，方便替换后核对版本。

## 2. 上传 Jar 到 Docker 主机

如果从 Windows 通过 SSH 上传，可以使用：

```powershell
scp .\Ubooquity.jar 用户名@192.168.13.1:/tmp/Ubooquity.jar
```

如果不用 `scp`，也可以通过 SMB、NAS 文件管理器或其他方式上传。核心要求是：让新的 `Ubooquity.jar` 出现在 `192.168.13.1` 这台机器上的某个目录中。

## 3. SSH 登录 Docker 主机

```powershell
ssh 用户名@192.168.13.1
```

如果已经登录，并且当前目录就是新 Jar 所在目录，可以直接继续后续步骤。

## 4. 确认容器正在运行

```bash
docker ps --filter name=ubooquity
```

如果没有看到 `ubooquity` 容器，先确认容器名：

```bash
docker ps
```

后续命令里的 `ubooquity` 需要替换成实际容器名。

## 5. 在容器内搜索 Jar 实际位置

不要只凭记忆覆盖文件，先搜索正在运行的容器内实际 Jar 位置：

```bash
docker exec ubooquity sh -c 'find / -type f \( -name "Ubooquity.jar" -o -name "Ubooquity*.jar" \) 2>/dev/null'
```

本项目当前确认结果是：

```text
/app/ubooquity/Ubooquity.jar
```

如果你的输出不同，后续命令里的路径要改成实际搜索结果。

## 6. 备份容器内原 Jar

在 Docker 主机当前目录备份容器里的原始 Jar：

```bash
docker cp ubooquity:/app/ubooquity/Ubooquity.jar ./Ubooquity.jar.container.bak
```

建议确认备份文件存在：

```bash
ls -lh ./Ubooquity.jar.container.bak
```

## 7. 停止容器

不要在容器运行时直接覆盖 Jar。先停止容器：

```bash
docker stop ubooquity
```

## 8. 替换 Jar

如果新的 Jar 在当前目录：

```bash
docker cp ./Ubooquity.jar ubooquity:/app/ubooquity/Ubooquity.jar
```

如果新的 Jar 在 `/tmp/Ubooquity.jar`：

```bash
docker cp /tmp/Ubooquity.jar ubooquity:/app/ubooquity/Ubooquity.jar
```

## 9. 启动容器并查看日志

```bash
docker start ubooquity
docker logs -f ubooquity
```

看到服务正常启动后，可以按 `Ctrl + C` 退出日志查看。退出日志不会停止容器。

## 10. 浏览器验证

访问前台：

```text
http://192.168.13.1:2202/ubooquity/
```

访问后台：

```text
http://192.168.13.1:2203/ubooquity/admin
```

移动端主题验证重点：

- 手机端是否加载移动端专用样式。
- 浏览器开发者工具或网络面板中应能看到类似：

```text
/theme/common/mobile.css?v=20260519-mobile-layout-2
```

如果手机端仍然显示旧排版，优先使用无痕窗口访问，或清理该站点缓存。

## 11. 回滚

如果替换后容器启动失败或页面异常，使用第 6 步备份的 Jar 回滚：

```bash
docker stop ubooquity
docker cp ./Ubooquity.jar.container.bak ubooquity:/app/ubooquity/Ubooquity.jar
docker start ubooquity
docker logs -f ubooquity
```

## 12. 注意事项

- LinuxServer 镜像通常不建议在容器内部直接更新应用。这里替换 Jar 属于定制容器内容。
- 后续如果执行 `docker compose pull`、`docker compose up -d` 或重建容器，镜像内原始 Jar 可能覆盖当前修改，需要重新替换。
- 更长期稳定的方式是基于 `lscr.io/linuxserver/ubooquity:latest` 制作自定义镜像，把修改后的 Jar 固化进去。
- 每次替换前都应先搜索容器内 Jar 路径，并备份原文件。


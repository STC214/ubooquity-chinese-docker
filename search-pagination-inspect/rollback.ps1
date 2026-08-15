$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $PSScriptRoot
$backup = Join-Path $PSScriptRoot 'Ubooquity.original.jar.bak'
$target = Join-Path $root 'Ubooquity.jar'
$expectedSha256 = '8310A8DD0243C351C7039846F170EA3E61DEEC7672196D5AD267CA35F4A7318D'
$actualSha256 = (Get-FileHash -Algorithm SHA256 -LiteralPath $backup).Hash
if ($actualSha256 -ne $expectedSha256) { throw "Backup hash mismatch: $actualSha256" }
Copy-Item -LiteralPath $backup -Destination $target -Force
$restoredSha256 = (Get-FileHash -Algorithm SHA256 -LiteralPath $target).Hash
if ($restoredSha256 -ne $expectedSha256) { throw "Rollback verification failed: $restoredSha256" }
Write-Output "ROLLBACK_OK sha256=$restoredSha256 target=$target"
exit 0

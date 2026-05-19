# Ubooquity Chinese Docker Kit

这个仓库记录了我整理的 Ubooquity 中文增强与移动端适配方案。当前重点已经从单独的自定义主题，扩展到直接修改 Ubooquity Jar 内置默认主题，让正在运行的默认界面也能在 PC 和手机浏览器上获得更舒服的排版。

当前本地 `Ubooquity.jar` 已合入默认主题、阅读页和部分中文化修改，可作为测试包替换到 Docker 容器中验证。

## 当前状态

- 默认主题 `themes/default` 已加入 PC / 移动端自适应布局。
- 首页 `Comics`、最近漫画、原始文件入口已重新排版，PC 保持舒适比例，移动端放大图标与文字。
- 漫画列表页移动端最多 3 列，窄屏自动降为 2 列，避免封面和文字过小。
- 漫画详情弹窗已改为页面居中，封面、按钮和移动端点击区域已放大。
- 阅读页移动端菜单已贴顶显示，按钮放大但限制宽度，避免遮挡关闭区域和左右翻页区域。
- 详情弹窗的下载、阅读、标记未读、标记已读按钮已加粗并改为纯白文字。
- `theme/zh-modern` 仍保留为可选中文美化主题，但当前正在使用和验证的主要目标是 Jar 内置默认主题。

详细修改清单见：

```text
docs/modification-summary.md
```

Docker 容器替换 Jar 的完整流程见：

```text
docs/replace-ubooquity-jar.md
```

## 合规说明

这个仓库主要用于记录我自己制作和整理的主题样式、中文化脚本、部署说明和修改文档。

如果你要使用 Ubooquity，建议仍然按照原作者的许可方式单独获取程序本体，并遵守对应协议。不要把这里的文件描述成 Ubooquity 官方发布内容。

## 仓库内容

- `compose.yml`：LinuxServer Ubooquity Docker Compose 示例。
- `Ubooquity.jar`：本地合并过默认主题移动端适配、阅读页调整和中文化资源后的测试 Jar。
- `theme/default`：从 Jar 内置 `themes/default` 抽出的当前维护样式副本。
- `reader/pagereader`：从 Jar 内置 `pagereader` 抽出的当前维护阅读页资源副本。
- `theme/zh-modern`：可选中文美化主题，带移动端覆盖样式。
- `theme/zh-default`：尽量贴近官方布局的中文主题。
- `admin-i18n/ubooquity-admin-i18n.user.js`：后台管理页浏览器侧汉化脚本。
- `code_reference.md`：原始代码与修改后代码的对照文档。
- `docs/replace-ubooquity-jar.md`：在 Docker 容器中替换 Jar 的操作记录。
- `docs/modification-summary.md`：本项目整体修改内容和文件映射。

## 默认主题维护

当前实际生效的首页、漫画列表、详情弹窗和阅读页主要来自 Jar 内置资源。继续修改时优先改这些源码副本：

```text
theme/default/home/homepage.css
theme/default/library/library.css
reader/pagereader/reader.html
reader/pagereader/pagereader.css
reader/pagereader/pagereader.js
```

打包进 Jar 时，对应路径是：

```text
themes/default/home/homepage.css
themes/default/library/library.css
pagereader/reader.html
pagereader/pagereader.css
pagereader/pagereader.js
```

如果修改后页面没有变化，优先确认是否改到了默认主题，而不是只改了 `theme/zh-modern`。

## Docker 环境

当前推荐镜像：

```text
lscr.io/linuxserver/ubooquity:latest
```

当前示例 Docker 主机：

```text
192.168.13.1
```

已确认容器内 Jar 路径：

```text
/app/ubooquity/Ubooquity.jar
```

替换 Jar 前建议始终重新搜索容器内路径并备份原 Jar，避免镜像版本或容器结构变化造成误覆盖。

## 现有挂载

根据当前容器状态，挂载大致是这些：

- `/mnt/sda4/Comics_L/books` -> `/books`
- `/mnt/sdb1/SHOTA/COMIC` -> `/comics`
- `/mnt/sda4/Comics_L/config` -> `/config`
- `/mnt/sda4/Comics_L/files` -> `/files`

如果你的实际路径不同，记得同步修改 `compose.yml`。

## 常用命令

启动或更新 compose：

```bash
docker compose up -d
docker compose pull
docker compose up -d
```

检查容器状态和日志：

```bash
docker compose ps
docker logs -f ubooquity
```

查看本地 Jar 哈希：

```powershell
Get-FileHash -Algorithm SHA256 .\Ubooquity.jar
```

## 中文主题

### `theme/zh-modern`

这是一个基于 Ubooquity 官方主题机制制作的中文美化主题，覆盖范围包括首页、登录页、书库列表页、详情页、顶栏、搜索和分页状态。

安装方式是把整个 `zh-modern` 目录放到 Ubooquity 工作目录下的 `themes` 里，例如：

```text
/mnt/sda4/Comics_L/config/themes/zh-modern
```

### `theme/zh-default`

这是一个尽量贴近官方默认布局的中文主题。如果你想保留更多原始结构，只替换前台中文文案，可以选它。

## 后台汉化

浏览器侧后台汉化脚本在：

```text
admin-i18n/ubooquity-admin-i18n.user.js
```

它适合装在 Tampermonkey、Violentmonkey 或其他支持用户脚本的浏览器扩展里。访问后台时，它会把常见后台文案替换成中文，并做一些简单界面优化。

## 后续维护建议

1. 修改默认主题或阅读页源码副本。
2. 重新打包 `Ubooquity.jar`。
3. 检查 Jar 内文件是否和源码副本一致。
4. 按 `docs/replace-ubooquity-jar.md` 替换 Docker 容器内 Jar。
5. 用 PC 浏览器、手机浏览器分别验证首页、列表页、详情弹窗和阅读页。
6. 如果页面仍是旧样式，清理浏览器缓存或用无痕窗口重新访问。

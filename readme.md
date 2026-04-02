# Ubooquity Chinese Docker Kit

这个仓库记录了一套 Ubooquity 的中文增强方案，主要包括：

- 从 `docker run` 迁移到 `docker compose` 的部署整理
- 中文主题 `theme/zh-modern` 和 `theme/zh-default`
- 浏览器侧后台汉化脚本 `admin-i18n`
- 原始文件与修改后文件的对照文档 `code_reference.md`

如果你也在折腾 Ubooquity 的中文界面、主题和容器部署，这个仓库可以直接作为参考。

## 合规说明

这个仓库只提供我自己制作的中文主题、后台汉化脚本、部署说明和对照文档，不包含也不分发 Ubooquity 的官方安装包、源代码或其他受原作者协议限制的内容。

如果你要使用 Ubooquity，本仓库建议你仍然按原作者的许可方式单独获取程序本体，并遵守其对应协议。

换句话说：

- 仓库内容只覆盖我新增或修改的部分
- Ubooquity 本体请由用户自行获取
- 不要把这里的文件描述成 Ubooquity 官方发布内容
- 如果后续加入了第三方资源，也要分别保留各自的授权信息

## 仓库内容

- `compose.yml`：可直接使用的容器编排配置
- `theme/zh-modern`：更现代的中文美化主题
- `theme/zh-default`：尽量保持官方布局的中文主题
- `admin-i18n/ubooquity-admin-i18n.user.js`：后台管理页汉化脚本
- `code_reference.md`：完整的原始代码 / 修改后代码对照文档

## 当前镜像

当前推荐使用的镜像是：

- `lscr.io/linuxserver/ubooquity:latest`

如果你之前还在用旧的 `linuxserver/ubooquity`，建议切换到上面这个地址。

## 迁移前说明

你如果是从 `docker run` 切到 `docker compose`，通常需要先停掉旧容器，再用 compose 重新创建。

只要不要删除宿主机上的配置目录，书库、数据库和设置都会保留。

## 现有挂载

根据当前容器状态，挂载大致是这些：

- `/mnt/sda4/Comics_L/books` -> `/books`
- `/mnt/sdb1/SHOTA/COMIC` -> `/comics`
- `/mnt/sda4/Comics_L/config` -> `/config`
- `/mnt/sda4/Comics_L/files` -> `/files`

如果你的实际路径不同，记得同步修改 `compose.yml`。

## 第一次迁移

如果你要从旧容器迁移到 compose，可以按这个顺序来：

```bash
docker pull lscr.io/linuxserver/ubooquity:latest
docker stop ubooquity
docker rm ubooquity
```

然后检查仓库根目录的 `compose.yml`，把里面的卷路径改成你自己的实际路径，再启动：

```bash
docker compose up -d
```

## 日常更新

以后更新通常只需要这两步：

```bash
docker compose pull
docker compose up -d
```

## 常用检查命令

迁移完成后，可以检查容器状态和日志：

```bash
docker compose ps
docker logs -f ubooquity
```

如果权限有问题，可以先查看当前用户的 UID 和 GID：

```bash
id
```

仓库里的 `compose.yml` 目前把 `PUID` 和 `PGID` 都设成了 `0`，这是因为我当前宿主机目录就是以 root 权限在管理。

如果你的目录不是这种情况，就把它们改成你自己的 UID / GID。

## 中文主题

### `theme/zh-modern`

这是基于 Ubooquity 官方主题机制做的中文美化主题，覆盖范围包括：

- 首页
- 登录页
- 书库列表页
- 分类根目录页
- 详情页
- 顶栏、搜索和分页状态
- 通用样式和少量交互增强

安装方式是把整个 `zh-modern` 目录放到 Ubooquity 工作目录下的 `themes` 里。

如果你是 LinuxServer Docker，一般可以放到：

```text
/mnt/sda4/Comics_L/config/themes/zh-modern
```

它是一个前台主题，不会修改 Ubooquity 的后台管理页。

### `theme/zh-default`

这是一个尽量贴近官方默认布局的中文主题。

如果你想保留更多原始结构，只是把英文界面换成中文，可以选它。

安装位置同样是 Ubooquity 工作目录下的 `themes` 目录。

## 后台汉化

仓库里还提供了一个浏览器侧的后台汉化脚本：

```text
admin-i18n/ubooquity-admin-i18n.user.js
```

它适合装在 Tampermonkey、Violentmonkey 或其他支持用户脚本的浏览器扩展里。

访问 `http://你的地址:2203/admin` 时，它会自动把常见的后台文案替换成中文，并做一些简单的界面优化。

## 代码对照文档

完整的“原代码 / 修改后代码”对照文档在：

```text
code_reference.md
```

如果你后面继续改主题、后台脚本或文案，建议先看这份文档，再按对应文件替换修改。

## 建议的后续维护流程

1. 先改 `compose.yml`，确认挂载路径和环境变量。
2. 再确认主题目录是否放进了正确的 `themes` 目录。
3. 如果要汉化后台，再装 `admin-i18n` 脚本。
4. 最后用 `docker compose up -d` 和 `docker logs -f ubooquity` 验证效果。

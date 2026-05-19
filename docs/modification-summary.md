# Ubooquity 项目修改总览

本文档整理当前项目已经完成的整体修改，方便后续继续维护、重新打包 Jar 或排查线上 Docker 容器中的显示问题。

## 1. 修改目标

本轮修改的核心目标是让 Ubooquity 的默认前台界面在 PC 和移动端都更好用：

- PC 端保持默认主题的熟悉结构，但改善首页入口和详情弹窗的视觉比例。
- 移动端使用更适合触屏的小屏排版，避免封面、文字和按钮过小。
- 阅读页菜单适配手机浏览器，减少遮挡和误触。
- 保持整体默认暗色模式，不引入浅色默认外观。

## 2. 当前实际生效的前端位置

当前线上验证生效的是 Jar 内置默认主题，而不是单独安装的 `zh-modern` 主题。

本地维护副本与 Jar 内路径对应关系如下：

| 本地文件 | Jar 内路径 | 用途 |
| --- | --- | --- |
| `theme/default/home/homepage.css` | `themes/default/home/homepage.css` | 默认主题首页 |
| `theme/default/library/library.css` | `themes/default/library/library.css` | 默认主题书库、列表、详情弹窗 |
| `reader/pagereader/reader.html` | `pagereader/reader.html` | 漫画阅读页 HTML |
| `reader/pagereader/pagereader.css` | `pagereader/pagereader.css` | 漫画阅读页样式 |
| `reader/pagereader/pagereader.js` | `pagereader/pagereader.js` | 漫画阅读页脚本副本 |
| `theme/zh-modern` | `themes/zh-modern` | 可选中文美化主题 |

如果页面显示没有变化，优先确认改动是否已经写入 Jar 内的 `themes/default` 或 `pagereader` 路径。

## 3. 默认首页修改

维护文件：

```text
theme/default/home/homepage.css
```

主要修改：

- 首页使用视口高度进行整体居中，移动端不再一直贴在页面上半部分。
- PC 端首页比例已经调整到较舒服状态，后续不建议轻易改动。
- 移动端 `Comics` 和 `原始文件` 两个卡片作为整体居中显示。
- 移动端卡片尺寸、图标和标题显著放大，避免手机上入口过小。
- 卡片外分割线上的图标和文字已放大。
- 卡片下方 `由 Ubooquity 驱动` 字样已在移动端放大。
- 低高度屏幕增加回退规则，避免元素过大时被垂直裁切。

当前关键样式特征：

- 页面使用 `min-height: 100dvh`。
- 移动端卡片宽度约束为 `min(92vw, 330px)`。
- 移动端卡片高度、分类标题、图标和 powered by 文本均有专门放大规则。

## 4. 默认书库与漫画列表修改

维护文件：

```text
theme/default/library/library.css
```

主要修改：

- 移动端漫画列表最多每行 3 个漫画。
- 更窄屏幕自动降为每行 2 个漫画。
- 漫画条目封面、标题和条目间距按移动端重新设置，减少小图小字问题。
- 根目录页面的 `Comics`、最近漫画、原始文件入口重新居中排版。
- 原始文件按钮中的图标在按钮框内上下左右居中。

## 5. 漫画详情弹窗修改

维护文件：

```text
theme/default/library/library.css
```

主要修改：

- 点击漫画后出现的详情弹窗从靠近顶部改为页面居中。
- 弹窗高度增加，封面缩略图显示更大。
- 下载、阅读、标记未读、标记已读按钮增大，方便手机端点击。
- 详情按钮文字加粗。
- 详情按钮文字改为纯白色，提升暗色背景上的可读性。
- 移动端详情弹窗保留响应式宽度，避免超出屏幕。

## 6. 移动端阅读页修改

维护文件：

```text
reader/pagereader/reader.html
reader/pagereader/pagereader.css
```

主要修改：

- `reader.html` 增加 viewport 元信息，让手机浏览器按设备宽度渲染。
- 移动端阅读菜单贴近页面顶部显示。
- 菜单高度限制为屏幕高度的一部分，避免压住默认的下方关闭区域。
- 菜单按钮和字体放大到适合触屏点击的大小。
- 后续又将按钮宽度缩小到约当前的一半，减少遮挡左右翻页区域。
- `Close book` 和 `Go to page...` 按钮禁止换行。
- 通过降低按钮文字字号，避免英文按钮文本溢出边界。

当前关键样式特征：

- 移动端菜单 `#centermenu` 固定在顶部。
- 菜单最大高度约为 `48vh`。
- 菜单内主要按钮宽度约为 `50%`。
- `Close book` 和 `Go to page...` 使用 `white-space: nowrap`。

## 7. 暗色模式确认

当前默认主题修改仍基于 Ubooquity 原有暗色外观进行扩展：

- 没有把默认主题切换为浅色模式。
- PC 与移动端都继续使用暗色背景和暗色卡片体系。
- 详情按钮已改为纯白文字，以适配暗色弹窗。
- `theme/zh-modern` 的移动端覆盖样式也按暗色主题方向保留。

## 8. 可选中文主题修改

维护目录：

```text
theme/zh-modern
theme/zh-default
```

`theme/zh-modern` 已包含：

- 中文美化主题结构。
- 移动端覆盖样式 `common/mobile.css`。
- 前台布局切换脚本与样式。
- 登录页、首页、书库页、详情页、顶栏和搜索等中文化与样式优化。

需要注意：当前用户线上看到并验证的是默认主题，因此后续默认界面问题应优先修改 `theme/default` 和 `reader/pagereader`。

## 9. Docker 替换 Jar 流程

完整操作记录见：

```text
docs/replace-ubooquity-jar.md
```

当前示例环境：

- Docker 主机：`192.168.13.1`
- 容器名：`ubooquity`
- 容器内 Jar 路径：`/app/ubooquity/Ubooquity.jar`

替换前建议先在容器内搜索 Jar 实际路径，并备份原始 Jar。

## 10. 当前本地 Jar 信息

当前本地测试 Jar：

```text
Ubooquity.jar
```

当前记录的 SHA256：

```text
CF7CD18796F44F1128EC50F371916F88027820854FA340E6BF364D1CCF481820
```

如果后续重新打包，应重新执行：

```powershell
Get-FileHash -Algorithm SHA256 .\Ubooquity.jar
```

然后更新本文档中的哈希。

## 11. 验证清单

替换 Jar 后建议按下面顺序验证：

1. PC 首页：两个入口卡片比例是否正常，整体是否仍居中。
2. 手机首页：卡片、图标、标题、powered by 字体是否足够大。
3. 手机漫画列表：每行是否最多 3 个漫画，窄屏是否自动降为 2 个。
4. 根目录页面：`Comics`、最近漫画、原始文件入口是否居中且不拥挤。
5. 漫画详情弹窗：是否页面居中，封面是否更大，按钮是否纯白加粗。
6. 手机阅读页：菜单是否贴顶，关闭区域和左右翻页区域是否仍容易触碰。
7. 浏览器缓存：如果样式没变化，使用无痕窗口或清理站点缓存再次测试。

## 12. 后续维护注意事项

- 修改默认主题时，不要只改 `theme/zh-modern`。
- 每次打包后都应检查 Jar 内文件是否与本地源码副本一致。
- LinuxServer 镜像更新或容器重建可能覆盖手动替换的 Jar。
- 长期稳定方案是基于 `lscr.io/linuxserver/ubooquity:latest` 制作自定义镜像，把修改后的 Jar 固化进去。

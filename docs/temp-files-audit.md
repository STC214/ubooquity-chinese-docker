# 临时文件与备份文件审计

本文档记录当前项目目录中疑似临时文件、备份文件和大体积构建产物的检查结果。

检查时间：2026-05-19

## 1. 扫描范围

本次检查覆盖项目根目录及子目录，重点关注以下类型：

- `*.jar`
- `*.bak`
- `*.tmp`
- `*.temp`
- `*.old`
- `*.orig`
- `*~`
- Vim 交换文件 `*.swp`、`*.swo`
- 系统缓存文件 `.DS_Store`、`Thumbs.db`

当前没有发现 `*.tmp`、`*.temp`、`*.old`、`*.orig`、`*~`、`*.swp`、`*.swo`、`.DS_Store` 或 `Thumbs.db`。

## 2. 根目录 Jar 与备份文件

| 文件 | 大小 | 修改时间 | SHA256 | 判断 |
| --- | ---: | --- | --- | --- |
| `Ubooquity.jar` | 33,067,269 字节 | 2026-05-19 14:34:18 | `CF7CD18796F44F1128EC50F371916F88027820854FA340E6BF364D1CCF481820` | 当前测试主 Jar |
| `Ubooquity.jar.before-responsive.bak` | 33,060,434 字节 | 2026-04-10 19:24:12 | `8D35E46D863E2D1D718A651E23C9B4507EDA2145D59C7DFBE1E086C707480F04` | 移动端自适应修改前备份 |
| `Ubooquity.jar.bak` | 33,027,170 字节 | 2025-08-10 21:55:36 | `887A22C0BB030D008F86A55574782D78EC92B21E8823B24343ADAD31D24163B9` | 早期备份 Jar |
| `Ubooquity - 副本.jar` | 33,047,819 字节 | 2026-04-01 18:38:02 | `A1146E8B2F14B41C5B44D12806991E83D6355B13CE506D29E7509472A61EF42A` | Windows 复制产生的副本 Jar |

## 3. 建议保留项

### `Ubooquity.jar`

这是当前正在维护和替换到 Docker 容器中的主 Jar，应保留。

### `Ubooquity.jar.before-responsive.bak`

这是移动端自适应修改前的备份。它对回滚移动端布局改动有参考价值，建议至少保留到当前移动端布局稳定一段时间之后。

如果后续已经确认新 Jar 长期稳定，可以把它移动到单独的归档目录，例如：

```text
archive/jars/Ubooquity.jar.before-responsive.bak
```

## 4. 可清理候选

### `Ubooquity - 副本.jar`

文件名显示它是 Windows 资源管理器复制产生的副本，语义不清楚，不适合作为长期备份命名。

建议：

- 如果确认它没有特殊用途，可以删除。
- 如果需要保留，应改名为带日期和用途的名称，例如 `Ubooquity.jar.20260401-copy.bak`，并放入归档目录。

### `Ubooquity.jar.bak`

这是较早期备份 Jar，修改时间为 2025-08-10。当前无法仅从文件名判断它对应哪个版本。

建议：

- 如果这是原始官方 Jar 或重要基线版本，应改名说明用途，例如 `Ubooquity.jar.original-20250810.bak`。
- 如果已经有更可靠的原始备份来源，可以删除。

## 5. 不建议当作临时文件删除的新增目录

下面这些虽然目前在 `git status` 中显示为未跟踪，但它们是本轮修改的源码副本或文档目录，不应按临时文件处理：

- `docs/`
- `reader/`
- `theme/default/`
- `theme/zh-modern/common/mobile.css`

这些文件用于后续继续修改默认主题、阅读页和文档说明，建议纳入版本管理。

## 6. 当前 Git 状态摘要

当前工作区包含这些已修改或新增内容：

- `Ubooquity.jar` 已修改，是当前测试主 Jar。
- `readme.md` 已更新为项目入口文档。
- `docs/` 下新增了 Jar 替换流程、修改总览和本临时文件审计文档。
- `reader/` 下新增了阅读页维护副本。
- `theme/default/` 下新增了默认主题维护副本。
- `theme/zh-modern/` 下有早前中文主题和移动端适配相关修改。
- `Ubooquity.jar.before-responsive.bak` 是未跟踪备份文件。

## 7. 推荐整理方案

为了让根目录更干净，可以后续采用这个结构：

```text
archive/
  jars/
    Ubooquity.jar.before-responsive.bak
    Ubooquity.jar.original-20250810.bak
```

推荐保留根目录中的 `Ubooquity.jar` 作为当前可替换测试包，把历史备份统一放到 `archive/jars/`。

如果需要清理，建议先确认每个备份 Jar 的用途，再执行删除或移动操作。

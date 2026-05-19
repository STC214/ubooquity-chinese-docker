# default

这是 Ubooquity 内置 `themes/default` 主题中当前项目实际改动到的样式源码副本。

## 当前维护文件

- `home/homepage.css`
  - 首页分类入口、`Comics`、`latest-comics`、原始文件等圆形按钮的布局。
  - 当前已改为在 PC 和移动端都居中排列。
- `library/library.css`
  - 书库列表、根目录矩形入口、移动端漫画封面网格。
  - 当前移动端最多三列，小屏自动降为两列。

## 打包路径

本目录内容打包进 Jar 时，对应路径是：

```text
themes/default/home/homepage.css
themes/default/library/library.css
```

如果继续修改默认主题，优先修改本目录下的文件，然后再更新 `Ubooquity.jar`。


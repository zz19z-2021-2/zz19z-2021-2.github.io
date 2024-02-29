# 十分普通的开发笔记

这里是用来记录开发过程中可能会忘的技术性细节。每处细节使用H2标题开头。

## Bootstrap CDN

我们的网站使用Bootstrap前段开发框架，其样式表和JS脚本分别在`_includes/head-custom.html`和`_layouts/*.html`中被引用。共有三份分发方案：jsDelivr、cdnjs和网站自身。修改时请注意：链接文件越多，在网速慢时加载时间越长，但CDN选择过少会导致某些地区无法正常查看网页。

## 禁用的Open Sans字体预加载

禁用从fonts.googleapis.com预加载Open Sans字体。该代码在`_layouts/*.html`中被注释，有需要可重新启用。

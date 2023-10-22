---
category: history
---

# Version 0.4.2

本次更新发布于2023年4月29日，更新了首页，加入了“八校联考倒计时”。

## 更改

- 在[首页](/)页面中新增了“八校联考倒计时”卡片板块，和“资料整理页面大更新”卡片并排显示。
- 将[首页](/)页面的“经典诵读”板块的诵读内容修改为卡片样式。
- 在[更新历史](/roots/history)页面新增了目录，由Javascript自动生成。

### 技术性

- “八校联考倒计时”卡片板块由Javascript自动生成，因此会根据电脑时间变化。
    - 网页代码中规定了各时间单位的宽度来保证不因数字变化而影响排版。如果您需要更长的倒计时宽度，请删去“定义文字大小函数”中的`document.getElementsByClassName("time")[i].style.width = "60px";`行和`document.getElementsByClassName("time")[i].style.width = "80px";`行，这样可以使浏览器根据数字长度自动排版。
- “八校联考倒计时”卡片板块支持根据屏幕大小自动适配，使用Javascript获取浏览器窗口宽度实现。

## 修复

- 修复了[首页](/)页面中，事件内容与事件的时间和状态间隔过远的问题。

## 你知道吗

这次更新的代码70%都是由Claude这个AI编写，剩下的20%由我提出意见并由Claude修改，只有10%是我自己根据咱们网站特点专门修改的哦！如果你也想尝试Claude，请前往[Claude官网](https://www.anthropic.com/claude-in-slack)，根据要求下载[Slack](https://slack.com)并添加进你的工作区，就可以正常使用了！如果不明白怎么做，可以去[哔哩哔哩](https://www.bilibili.com)搜索“Claude”获取视频教程！**请注意：现在Claude需要科学上网获得国外IP才可以添加到Slack，添加后对IP地址归属没有限制。**

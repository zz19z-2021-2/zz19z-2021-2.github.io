# 更新历史

详细的历史记录请见[GitHub上的本网站存储库](https://github.com/zz19z-2021-2/zz19z-2021-2.github.io)。本页面不包含`Alpha`版和`0._._.X`等非正式更新。例如，`0.4.2.1`是一个非正式更新，而`0.4.2`是一个正式更新。

**最后更新：2023年4月29日。**

<div id="tableOfContents"></div>
<script>
function generateTableOfContents() {
  // 获取div容器和所有h1标题
  var toc = document.getElementById("tableOfContents");
  var headers = document.querySelectorAll("h1");
  
  // 遍历h1标题,排除前两个标题
  for (var i = 2; i < headers.length; i++) {
    // 创建a链接
    var a = document.createElement("a");
    a.href = "#" + headers[i].id;
    a.innerText = headers[i].innerText;
    
    // 设置锚点 id
    if (!headers[i].id) {
      headers[i].id = "title" + i;
    }  
    
    // 创建li并追加a链接
    var li = document.createElement("li");
    li.appendChild(a);
    
    // 追加li到目录div
    toc.appendChild(li);
  }
  
  // 再次获取标题元素并更新链接 
  var links = toc.querySelectorAll("a");
  headers = document.querySelectorAll("h1");
  for (var i = 2; i < headers.length; i++) {
    links[i-2].href = "#" + headers[i].id;  // 减2来修复索引
  }
}

window.onload = generateTableOfContents;
</script>

# Version 0.3.0

本次更新发布于2023年4月8日，新增了[更新历史](/history)页面（本页面），移除了大量无时效性的内容，并恢复了[个人空间](/个人空间)页面的维护。

## 新内容

- 加入了[更新历史](/history)页面（本页面）。

## 更改

### 常规

- 删除了[首页](/index)的“在这里，书写壮举”板块。
- 在[首页](/index)底部新增网站信息栏，显示网站当前版本和最后更新时间。
- 在[内容总览](/overview)页面添加了[更新历史](/history)页面的链接。
- 将[个人空间](/个人空间)首页的导航系统进行更新，现在可以直接输入姓名前往对应的页面了。

### 技术性

- 将网站配置文件`_config.yml`中的`description:`一行改为空值（更改前的值为`寒假将至`）。
- [个人空间](/个人空间)首页的路径从`/Spaces/`修改到`/`（即根目录下），更改了文件名，并同时更改了[内容总览](/overview)页面的链接。
- 由于[个人空间](/个人空间)中每个页面的样式还不统一，其目前并没有开放正式链接（如[内容总览](/overview)页面上的链接）可共访问。

# Version 0.4.0

本次更新发布于2023年4月9日，将八年级上册｜学习资料整理页面移至[资料整理](/资料整理)页面，并进一步维护了[个人空间](/个人空间)页面。

## 更改

### 常规

- 将八年级上册｜学习资料整理页面大规模重写，并使用新名称和路径。现位于[资料整理](/资料整理)。
    - 使用全新的下拉菜单代替全部列出链接的形式，现在找资料更方便了。
    - 新增了八年级下册的资料和一些特殊资料。
    - 将[资料整理](/资料整理)页面链接从[内容总览](/overview)的“八年级”列移至“其它”列。
- 在[个人空间](/个人空间)页面新增了“制作你的个人空间”部分。
- 在[个人空间](/个人空间)页面的输入框中增加了提示文本。
- 在[帮助 / 反馈](/feedback)页面中新增了“收件箱”部分。
- 将所有页面（不包括[个人空间](/个人空间)等）顶部的固定导航栏修改为顶部无边距。

### 技术性

- 将所有页面中的单个缩进修改为4个空格（而非Tab）。
- 删除了所有链接末尾的`.html`扩展名。

## 修复

- 修复了[个人空间](/个人空间)页面中，不显示“前往他/她的主页！”按钮的问题。
- 修复了[首页](/index)页面中，[https://xiaocaozz.top](https://xiaocaozz.top)拼写错误的问题。
- 修复了[内容总览](/overview)页面中，链接至[更新历史](/history)页面（本页面）的按钮被禁用的问题。

# Version 0.4.1

本次更新发布于2023年4月22日，更新了首页，并将适合的按钮调整为全宽。

## 更改

- 在[首页](/index)页面中新增了“经典诵读”板块，并修改了“励志远足”板块。
    - 新增了“经典诵读”板块，加入诵读内容。
    - 修改了两个板块的时间提示，现在会根据当前时间显示活动是否正在进行了。
    - 新增了两个板块的官方（郑州市第十九初级中学）链接。
- 将[首页](/index)页面的卡片“新域名启用”修改为“资料整理页面大更新”。
- 将[内容总览](/overview)、[资料整理](/资料整理)、[帮助 / 反馈](/feedback)页面上的某些按钮修改为全宽。
- 将[2022元旦联欢会](/2022元旦联欢会)中，哔哩哔哩的视频框架修改得更高了（现在为600px）。

### 技术性

- 将显示页面头部导航栏的Javascript中引用内容的引号修改为单引号（以前是双引号）。
    - 因为用双引号引用内容会导致内容中所有双引号需要被转译（即`"`需要写为`\"`），单引号则可避免这一问题。

# Version 0.4.2

本次更新发布于2023年4月29日，更新了首页，加入了“八校联考倒计时”。

## 更改

- 在[首页](/index)页面中新增了“八校联考倒计时”卡片板块，和“资料整理页面大更新”卡片并排显示。
- 将[首页](/index)页面的“经典诵读”板块的诵读内容修改为卡片样式。
- 在[更新历史](/history)页面新增了目录，由Javascript自动生成。

### 技术性

- “八校联考倒计时”卡片板块由Javascript自动生成，因此会根据电脑时间变化。
    - 网页代码中规定了各时间单位的宽度来保证不因数字变化而影响排版。如果您需要更长的倒计时宽度，请删去“定义文字大小函数”中的`document.getElementsByClassName("time")[i].style.width = "60px";`行和`document.getElementsByClassName("time")[i].style.width = "80px";`行，这样可以使浏览器根据数字长度自动排版。
- “八校联考倒计时”卡片板块支持根据屏幕大小自动适配，使用Javascript获取浏览器窗口宽度实现。

## 修复

- 修复了[首页](/index)页面中，事件内容与事件的时间和状态间隔过远的问题。

## 你知道吗

这次更新的代码70%都是由Claude这个AI编写，剩下的20%由我提出意见并由Claude修改，只有10%是我自己根据咱们网站特点专门修改的哦！如果你也想尝试Claude，请前往[Claude官网](https://www.anthropic.com/claude-in-slack)，根据要求下载[Slack](https://slack.com)并添加进你的工作区，就可以正常使用了！如果不明白怎么做，可以去[哔哩哔哩](https://www.bilibili.com)搜索“Claude”获取视频教程！**请注意：现在Claude需要科学上网获得国外IP才可以添加到Slack，添加后对IP地址归属没有限制。**
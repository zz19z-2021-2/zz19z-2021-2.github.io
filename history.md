<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/css/bootstrap.min.css" rel="stylesheet" />
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/js/bootstrap.bundle.min.js"></script>
<nav class="navbar bg-white navbar-light sticky-top">
    <div class="container-fluid">
        <script src="/header.js" type="text/javascript"></script>
    </div>
</nav>
<link rel="stylesheet" type="text/css" href="style.css" />
<link rel="shortcut icon" href="/favicon.ico" />

# 更新历史

详细的历史记录请见[GitHub上的本网站存储库](https://github.com/zz19z-2021-2/zz19z-2021-2.github.io)。

**最后更新：2023年4月8日。**

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
# 内容总览

<style>
.btn {
    margin-bottom: 0rem;
}
h3 {
    margin-bottom: 0rem!important;
}
p {
    text-indent: 0;
}
</style>

超链接太乱？这里列出了我们网站的所有页面。

<hr />

<div class="d-grid mt-3">
<a type="button" href="/" class="btn btn-primary mb-0">首页</a>
</div>

<hr />

<div class="btn-group" id="buttonGroup">
    <a type="button" href="/roots/feedback" class="btn btn-outline-primary mb-0">帮助 / 反馈</a>
    <a type="button" href="/roots/overview" class="btn btn-outline-primary mb-0">内容总览</a>
    <a type="button" href="/roots/history" class="btn btn-outline-primary mb-0">更新历史</a>
    <a type="button" href="/roots/backups" class="btn btn-outline-primary mb-0">网站代码备份</a>
</div>
<script>
    function updateButtonLayout() {
        const buttonGroup = document.querySelector("#buttonGroup");
        const isVerticalLayout = window.innerWidth < 672;

        if (isVerticalLayout) {
            buttonGroup.classList.add("btn-group-vertical");
            buttonGroup.classList.remove("btn-group");
            buttonGroup.classList.add("d-flex");
            buttonGroup.classList.add("flex-column");
            buttonGroup.classList.remove("flex-row");
        } else {
            buttonGroup.classList.remove("btn-group-vertical");
            buttonGroup.classList.add("btn-group");
            buttonGroup.classList.remove("d-flex");
            buttonGroup.classList.remove("flex-column");
            buttonGroup.classList.add("flex-row");
        }
    }

    // 初始化时更新按钮布局
    updateButtonLayout();

    // 在窗口大小变化时更新按钮布局
    window.addEventListener("resize", updateButtonLayout);
</script>

<hr />

<div id="overview_contents" style="column-count:3;">
    <div class="list-group w-100 mb-3" style="display:inline-block;">
        <h3 class="list-group-item list-group-item-primary">七年级</h3>
        <div class="flex-column btn-group-vertical d-flex list-group-item pt-3 pb-3">
            <a type="button" href="/七年级/笑草说" class="mb-0 btn-outline-primary btn ms-0">笑草说</a>
            <a type="button" href="/七年级/阅读组合训练答案｜第二册" class="btn btn-outline-primary ms-0">阅读组合训练答案｜第二册</a>
            <a type="button" href="/七年级/上册/期末考试优秀作文" class="btn btn-outline-primary ms-0">上册 / 期末考试优秀作文</a>
            <a type="button" href="/七年级/下册/两弹一星" class="btn btn-outline-primary ms-0">下册 / 两弹一星</a>
            <a type="button" href="/七年级/下册/暑假英语练习" class="btn btn-outline-primary ms-0">下册 / 暑假英语练习</a>
        </div>
    </div>
    <div class="list-group w-100 mb-3" style="display:inline-block;">
        <h3 class="list-group-item list-group-item-primary">八年级</h3>
        <div class="flex-column btn-group-vertical d-flex list-group-item pt-3 pb-3">
            <a type="button" href="/八年级/上册/数学学习资料整理" class="mb-0 btn-outline-primary btn ms-0">上册 / 数学学习资料整理</a>
            <a type="button" href="/八年级/上册/政治学习资料整理" class="btn btn-outline-primary ms-0">上册 / 政治学习资料整理</a>
            <a type="button" href="/八年级/上册/期末背书规划" class="btn btn-outline-primary ms-0">上册 / 期末背书规划</a>
            <a type="button" href="/八年级/下册/八校联考优秀作文" class="btn btn-outline-primary ms-0">下册 / 八校联考优秀作文</a>
            <a type="button" href="/八年级/下册/政治学习资料整理" class="btn btn-outline-primary ms-0">下册 / 政治学习资料整理</a>
        </div>
    </div>
    <div class="list-group w-100 mb-3" style="display:inline-block;">
        <h3 class="list-group-item list-group-item-primary">其它</h3>
        <div class="flex-column btn-group-vertical d-flex list-group-item pt-3 pb-3">
            <a type="button" href="/其他/2022元旦联欢会" class="mb-0 btn-outline-primary btn ms-0">2022元旦联欢会</a>
            <a type="button" href="/其他/资料整理" class="btn btn-outline-primary ms-0">资料整理</a>
            <a type="button" href="/其他/个人空间" class="btn btn-outline-primary ms-0">个人空间</a>
        </div>
    </div>
</div>
<script>
    function adjustLayout() {
        var container = document.getElementById("overview_contents");
        if (window.innerWidth >= 950) {
            container.style.columnCount = '3';
        } else if (window.innerWidth >= 570) {
            container.style.columnCount = '2';
        } else {
            container.style.columnCount = '1';
        }
    }
    // 初始加载时调整布局
    window.onload = adjustLayout();
    // 当窗口大小改变时重新调整布局
    window.addEventListener('resize', adjustLayout);
</script>

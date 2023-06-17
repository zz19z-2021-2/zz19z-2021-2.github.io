# 内容总览

<style>
.btn {
    margin-bottom: 0rem;
}
h3 {
    margin-bottom: 0rem!important;
}
</style>

超链接太乱？这里列出了我们网站的所有页面。

<hr />

<a type="button" href="/" class="btn btn-primary w-100 mb-0">首页</a>

<hr />

<div class="btn-group" id="buttonGroup">
    <a type="button" href="/roots/feedback" class="btn btn-outline-primary mb-0">帮助 / 反馈</a>
    <a type="button" href="/roots/overview" class="btn btn-outline-primary mb-0">内容总览</a>
    <a type="button" href="/其他/个人空间" class="btn btn-outline-primary mb-0">个人空间</a>
    <a type="button" href="/roots/history" class="btn btn-outline-primary mb-0">更新历史</a>
</div>
<script>
    function updateButtonLayout() {
        const buttonGroup = document.querySelector("#buttonGroup");
        const isVerticalLayout = window.innerWidth < 420;

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
        <a href="/七年级/笑草说" class="list-group-item">
            <button type="button" class="btn btn-outline-primary w-100">笑草说</button>
        </a>
        <a href="/七年级/阅读组合训练答案｜第二册" class="list-group-item">
            <button type="button" class="btn btn-outline-primary w-100">阅读组合训练答案｜第二册</button>
        </a>
        <a href="/七年级/上册/期末考试优秀作文" class="list-group-item">
            <button type="button" class="btn btn-outline-primary w-100">上册 / 期末考试优秀作文</button>
        </a>
        <a href="/七年级/下册/两弹一星" class="list-group-item">
            <button type="button" class="btn btn-outline-primary w-100">下册 / 两弹一星</button>
        </a>
        <a href="/七年级/下册/暑假英语练习" class="list-group-item">
            <button type="button" class="btn btn-outline-primary w-100">下册 / 暑假英语练习</button>
        </a>
    </div>
    <div class="list-group w-100 mb-3" style="display:inline-block;">
        <h3 class="list-group-item list-group-item-primary">八年级</h3>
        <a href="/八年级/上册/数学学习资料整理" class="list-group-item">
            <button type="button" class="btn btn-outline-primary w-100">上册 / 数学学习资料整理</button>
        </a>
        <a href="/八年级/上册/政治学习资料整理" class="list-group-item">
            <button type="button" class="btn btn-outline-primary w-100">上册 / 政治学习资料整理</button>
        </a>
        <a href="/八年级/上册/期末背书规划" class="list-group-item">
            <button type="button" class="btn btn-outline-primary w-100">上册 / 期末背书规划</button>
        </a>
    </div>
    <div class="list-group w-100 mb-3" style="display:inline-block;">
        <h3 class="list-group-item list-group-item-primary">其它</h3>
        <a href="/其他/2022元旦联欢会" class="list-group-item">
            <button type="button" class="btn btn-outline-primary w-100">2022元旦联欢会</button>
        </a>
        <a href="/其他/资料整理" class="list-group-item disabled">
            <button type="button" class="btn btn-outline-primary w-100" disabled>资料整理</button>
        </a>
    </div>
</div>
<script>
    function adjustLayout() {
        var container = document.getElementById("overview_contents");
        if (window.innerWidth >= 900) {
            container.style.columnCount = '3';
        } else if (window.innerWidth >= 550) {
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

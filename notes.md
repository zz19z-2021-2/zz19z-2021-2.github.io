# 十分普通的开发笔记

这里是用来记录开发过程中可能会忘的技术性细节。每处细节使用H2标题开头。

## Bootstrap CDN

我们的网站使用Bootstrap前段开发框架，其样式表和JS脚本分别在`_includes/head-custom.html`和`_layouts/*.html`中被引用。共有三份分发方案：jsDelivr、cdnjs和网站自身。修改时请注意：链接文件越多，在网速慢时加载时间越长，但CDN选择过少会导致某些地区无法正常查看网页。

## 禁用的Open Sans字体预加载

禁用从fonts.googleapis.com预加载Open Sans字体。该代码在`_layouts/*.html`中被注释，有需要可重新启用。

## 重要的`_config.yml`文件

我们网站的根目录下有一`_config.yml`文件。作为Jekyll使用的文件，它不会被拷贝至实际网站的根目录，但是它的内容会被Jekyll解析并应用于网站。目前，该文件中的内容包括：

- version - 网站版本号，用于更新网站底部信息显示。

# 以下是网站测试部分

该部分内容与`index.md`相同，用于测试网站新功能。

# 欢迎

你好，这里是郑州市第十九初级中学笑草班！我们是一个团结、友善的班级，也是一个团队；我们有良好的班风，也有高尚的品质；我们向共同的目标、更好的成绩进发；我们如同高山流水一般，为班级贡献自己的力量。

愿现在看到这里的你，在以后的学习和生活中，都能遇见更好的自己。

<div class="d-grid">
    <div class="btn-group-vertical">
        <a class="btn btn-success mb-0" href="/其他/资料整理">全新录课视频入口！前往“资料整理”页面</a>
        <a class="btn btn-outline-success ms-0 mb-0" href="/roots/overview">不知从何下手阅读本站？来“内容总览”看看吧！</a>
    </div>
</div>
<style>
.countdown {
    width: 100%;
    text-align: center;
}
.number {
    display: block;
}
.text {
    display: block;
}
.time {
    display: inline-block;
}
</style>
<div class="card mt-3">
    <div class="card-body">
        <h2 id="timer-title" class="mt-0 mb-0 text-center card-title">距离一模还剩</h2>
        <div class="countdown">
            <div class="time">
                <div class="number" id="days">0</div>
                <div class="badge bg-success text" id="days">天</div>
            </div>
            <div class="time">
                <div class="number" id="hours">0</div>
                <div class="badge bg-primary text" id="hours">小时</div>
            </div>
            <div class="time">
                <div class="number" id="minutes">0</div>
                <div class="badge bg-warning text" id="minutes">分钟</div>
            </div>
            <div class="time">
                <div class="number" id="seconds">0</div>
                <div class="badge bg-danger text" id="seconds">秒</div>
            </div>
        </div>
        <button type="button" class="btn btn-light btn-sm mb-0" style="position: absolute; bottom: 16px; right: 16px;" data-bs-toggle="modal" data-bs-target="#chooseDateModal">
            修改
        </button>
        <div class="modal fade" id="chooseDateModal" tabindex="-1" aria-labelledby="chooseDateModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title mb-0" id="chooseDateModalLabel">选择倒计时目标日期</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p id="target_date"></p>
                        <input type="datetime-local" id="dateTimePicker">
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
                        <button type="button" class="btn btn-primary" onclick="timerChangeDate()" data-bs-dismiss="modal">确定</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<script>
    timerInitialize()
</script>

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

# 欢迎

你好，这里是郑州市第十九初级中学笑草班！我们是一个团结、友善的班级，也是一个团队；我们有良好的班风，也有高尚的品质；我们向共同的目标、更好的成绩进发；我们如同高山流水一般，为班级贡献自己的力量。

愿现在看到这里的你，在以后的学习和生活中，都能遇见更好的自己。

<div class="card">
    <div class="card-body">
        <h2 class="card-title">资料整理页面大更新！</h2>
        <p class="card-text">为了满足日益增多的学习资料，我们几乎重写了整个<a href="/资料整理">资料整理</a>页面，来保证你可以方便地查找、使用资料。还等什么，快去看看全新设计的页面吧！</p>
        <div class="d-grid">
            <a type="button" class="btn btn-primary btn-block" href="/资料整理">资料整理</a>
        </div>
    </div>
</div>

# 经典诵读

<div id="activityStatus_2"></div>

<script>
var date = new Date(2023, 3, 20, 16, 10);  // 设置活动开始时间
var endTime = new Date(2023, 3, 20, 18, 30); // 设置活动结束时间
var now = new Date();   // 获取当前时间

if (now < date) {
  document.getElementById("activityStatus_2").innerHTML = '<span class="badge bg-secondary">2023年4月20日｜活动准备中</span>'; 
} else if (now >= date && now <= endTime) {
  document.getElementById("activityStatus_2").innerHTML = '<span class="badge bg-success">2023年4月20日｜活动进行中</span>';
} else {
  document.getElementById("activityStatus_2").innerHTML = '<span class="badge bg-danger">2023年4月20日｜活动已结束</span>';
}
</script>

八年级学生经典诵读活动，本班诵读内容如下：

<!-- 内容太短，用不上链接跳转 
<body id="jdsd" data-bs-spy="scroll" data-bs-target=".navbar" data-bs-offset="70">
    <nav id="jdsd_content" class="navbar-expand-md navbar navbar-light bg-light fixed-top">
        <div class="container-fluid">
            <span class="navbar-brand">诵读内容</span>
            
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#jdsd_links">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="jdsd_links">
                <ul class="navbar-nav">
                    <li class="nav-item"><a class="nav-link" href="#第一首">江城子 · 密州出猎</a></li>  
                    <li class="nav-item"><a class="nav-link" href="#第二首">定风波 · 莫听穿林打叶声</a></li>
                    <li class="nav-item"><a class="nav-link" href="#第三首">水调歌头 · 明月几时有</a></li>  
                    <li class="nav-item"><a class="nav-link" href="#第四首">念奴娇 · 赤壁怀古</a></li>
                </ul>
            </div>
        </div>
    </nav>
    -->
    <div class="container mt-3">
        <div id="第一首">
            <h2>江城子 · 密州出猎</h2>
            <p>老夫聊发少年狂，左牵黄，右擎苍，锦帽貂裘，千骑卷平冈。为报倾城随太守，亲射虎，看孙郎。<br />
            酒酣胸胆尚开张，鬓微霜，又何妨？持节云中，何日遣冯唐？会挽雕弓如满月，西北望，射天狼。</p>
        </div>
        <div id="第二首">
            <h2>定风波 · 莫听穿林打叶声</h2>
            <p>莫听穿林打叶声，何妨吟啸且徐行。竹杖芒鞋轻胜马，谁怕？一蓑烟雨任平生。<br />
            料峭春风吹酒醒，微冷，山头斜照却相迎。回首向来萧瑟处，归去，也无风雨也无晴。</p>
        </div>
        <div id="第三首">
            <h2>水调歌头 · 明月几时有</h2>
            <p>明月几时有？把酒问青天。不知天上宫阙，今夕是何年。我欲乘风归去，又恐琼楼玉宇，高处不胜寒。起舞弄清影，何似在人间。<br />
            转朱阁，低绮户，照无眠。不应有恨，何事长向别时圆？人有悲欢离合，月有阴晴圆缺，此事古难全。但愿人长久，千里共婵娟。</p>
        </div>
        <div id="第四首">
            <h2>念奴娇 · 赤壁怀古</h2>
            <p>大江东去，浪淘尽，千古风流人物。<br />
            故垒西边，人道是，三国周郎赤壁。<br />
            乱石穿空，惊涛拍岸，卷起千堆雪。<br />
            江山如画，一时多少豪杰。<br />
            <br />
            遥想公瑾当年，小乔初嫁了，雄姿英发。<br />
            羽扇纶巾，谈笑间，樯橹灰飞烟灭。<br />
            故国神游，多情应笑我，早生华发。<br />
            人生如梦，一尊还酹江月。</p>
        </div>
    </div>
<!-- 不用导航了 </body> -->
<div class="d-grid mt-3">
    <a type="button" class="btn btn-primary btn-block" href="https://mp.weixin.qq.com/s/MlI9AYINiG9FJ7bXxvEajg">前往 郑州市第十九初级中学微信公众号 查看</a>
</div>

# 励志远足

<div id="activityStatus"></div>

<script>
var date = new Date(2023, 3, 14, 7, 40);  // 设置活动开始时间
var endTime = new Date(2023, 3, 14, 16, 30); // 设置活动结束时间
var now = new Date();   // 获取当前时间

if (now < date) {
  document.getElementById("activityStatus").innerHTML = '<span class="badge bg-secondary">2023年4月14日｜活动准备中</span>'; 
} else if (now >= date && now <= endTime) {
  document.getElementById("activityStatus").innerHTML = '<span class="badge bg-success">2023年4月14日｜活动进行中</span>';
} else {
  document.getElementById("activityStatus").innerHTML = '<span class="badge bg-danger">2023年4月14日｜活动已结束</span>';
}
</script>

八年级学生励志远足活动，本班安排如下：

<ul class="list-group">
    <li class="list-group-item"><b>旗手：倪振云、梅满</b><br /><small class="text-secondary">负责在班级前方举旗</small></li>
    <li class="list-group-item"><b>安全员：李逸然、周一轩</b><br /><small class="text-secondary">负责班级中间队伍安全</small></li>
    <li class="list-group-item"><b>摄影师：胡志宇、武倬萱、张珂源</b>、邱家杨<br /><small class="text-secondary">负责给同学和家长拍照、留念</small></li>
</ul>
<div class="d-grid mt-3">
    <a type="button" class="btn btn-primary btn-block" href="https://mp.weixin.qq.com/s/Z-Stpz7b2-dCi0SHsX9l5w">前往 郑州市第十九初级中学微信公众号 查看</a>
</div>

<br />
<span class="badge bg-secondary">xiaocaozz.top [Version: 0.4.1] <a href="/history" class="text-info">更新历史</a></span>
<br />

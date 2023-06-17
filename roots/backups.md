# 网站代码备份

如果有效果好的可复用前端代码，都会在这里用作备份，以供需要时使用。你也可以使用下面这些代码。

# roots/index.md Backup

## Timer

```HTML
<div class="row" style="--bs-gutter-x: 0rem;">
    <div class="card col-lg-6">
        <div class="card-body">
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
            <h2 id="bxlk-title">距离八校联考还剩</h2>
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
                            <p id="target_date">当前目标时间：2023年5月17日 星期四8:0:0</p>
                            <input type="datetime-local" id="dateTimePicker">
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
                            <button type="button" class="btn btn-primary" onclick="changeDate()" data-bs-dismiss="modal">确定</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="card col-lg-6" style="display:inline-block">
        <div class="card-body">
            <h2 class="card-title">资料整理页面大更新！</h2>
            <p class="card-text">为了满足日益增多的学习资料和面对即将到来的八校联考，我们几乎重写了整个资料整理页面，来保证你可以方便地查找、使用资料。还等什么？快去看看全新设计的页面吧！</p>
            <div class="card-text d-grid">
                <a type="button" class="btn btn-primary btn-block" href="/资料整理">资料整理</a>
            </div>
        </div>
    </div>
</div>

<script>
// 定义文字大小函数
function setTextSize() {
    // 获取屏幕宽度
    var width = document.documentElement.clientWidth;
    if (width < 430) { // 小屏幕
        for (i = 0; i < 4; i++) {
            document.getElementsByClassName("number")[i].style.fontSize = "42px";
            document.getElementsByClassName("text")[i].style.fontSize = "16px";
            document.getElementsByClassName("time")[i].style.width = "60px";
        }
    } else { // 大屏幕
        for (i = 0; i < 4; i++) {
            document.getElementsByClassName("number")[i].style.fontSize = "60px";
            document.getElementsByClassName("text")[i].style.fontSize = "24px";
            document.getElementsByClassName("time")[i].style.width = "80px";
        }
    }
    if (width < 992) { // 小屏幕
        document.getElementById("bxlk-title").className = "text-center card-title mt-0 mb-0";
    } else { // 大屏幕
    document.getElementById("bxlk-title").className = "text-center card-title mt-3";
    }
}

// 调用函数,设置文字大小
window.addEventListener("resize", function(){
    setTextSize();
});
setTextSize();

// -------- 以上是响应式设计部分 --------
// -------- 以下是倒计时部分 --------
//
// 目标时间2023年5月18日上午8:00
var countDownDate = new Date("May 17, 2023 08:00:00").getTime();
var days, hours, minutes;
var interval;

function countdown() {
    // 获取当前时间
    var now = new Date().getTime();

    // 计算剩余时间
    var distance = countDownDate - now;

    if (distance >= 0) {
        // 秒数需要更新
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        document.getElementById("seconds").innerHTML = seconds;

        // 其他时间只在seconds变为59的时候更新
        if (seconds == 59) {
            days = Math.floor(distance / (1000 * 60 * 60 * 24));
            document.getElementById("days").innerHTML = days;
            hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            document.getElementById("hours").innerHTML = hours;
            minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            document.getElementById("minutes").innerHTML = minutes;
        }
    } else {
        days = 0;
        hours = 0;
        minutes = 0;
        seconds = 0;

        // 添加判断,如果distance小于0,清除setInterval以停止计时
        clearInterval(interval);
        // 添加警告框提示代码
        var alertDiv = document.createElement("div");
        alertDiv.className = "alert alert-warning mt-3";
        alertDiv.innerHTML = "倒计时已经结束!";
        document.getElementById("bxlk-title").appendChild(alertDiv);

        // 隐藏原倒计时
        document.querySelector(".countdown").style.display = "none";
    }
}
function firstTime() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    if (distance >= 0) {
        days = Math.floor(distance / (1000 * 60 * 60 * 24));
        document.getElementById("days").innerHTML = days;
        hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        document.getElementById("hours").innerHTML = hours;
        minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        document.getElementById("minutes").innerHTML = minutes;
    } else {
        days = 0;
        hours = 0;
        minutes = 0;
        seconds = 0;
    }
}
// 定义getChineseDate()函数
function getChineseDate(dateStr) {
    var date = new Date(dateStr);
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var week = date.getDay();
    var weeks = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();

    return "当前目标时间：" + year + "年" + month + "月" + day + "日 " + weeks[week] + hour + ":" + minute + ":" + second;
}
// 添加changeDate函数
function changeDate() {
    // 获取选中的日期
    var date = document.getElementById("dateTimePicker").value;
    countDownDate = new Date(date).getTime();
    firstTime()
    // 更新模态触发按钮显示的中文日期
    document.getElementById("target_date").innerText = getChineseDate(date);

    document.querySelector(".alert").remove();
    document.querySelector(".countdown").style.display = "block";

    clearInterval(interval);
    interval = setInterval(function() {
        countdown();
    }, 1000);
}
// 初始化调用
firstTime()
countdown()
// 调用函数,每秒刷新一次
interval = setInterval(function() {
    countdown();
}, 1000);
document.getElementById("target_date").innerText = getChineseDate("May 17, 2023 08:00:00");
</script>
```

# breadcrumbs.js backup

## With link

```JavaScript
// 获取当前页面的URL
var currentURL = window.location.href;

// 解析URL获取路径部分
var path = currentURL.split("/").filter(function (item) {
  return item !== "";
});

// 如果当前路径只有根目录，则隐藏面包屑元素
if (path.length <= 2) {
  var breadcrumbsElement = document.getElementById("breadcrumbs");
  if (breadcrumbsElement) {
    breadcrumbsElement.style.display = "none";
  }
} else {
  // 创建无序列表元素
  var breadcrumbList = document.createElement("ul");
  breadcrumbList.classList.add("breadcrumb");
  breadcrumbList.classList.add("mb-0");

  // 添加首页链接
  var homeListItem = document.createElement("li");
  homeListItem.classList.add("breadcrumb-item");
  var homeLink = document.createElement("a");
  homeLink.href = "/";
  homeLink.textContent = "首页";
  homeListItem.appendChild(homeLink);
  breadcrumbList.appendChild(homeListItem);

  // 添加面包屑导航项
  for (var i = 2; i < path.length; i++) {
    var listItem = document.createElement("li");
    listItem.classList.add("breadcrumb-item");

    // 添加链接（除最后一个项）
    if (i < path.length - 1) {
      var link = document.createElement("a");
      link.href = "/" + path.slice(2, i + 1).join("/");
      link.textContent = decodeURIComponent(path[i]);
      listItem.appendChild(link);
    } else {
      // 最后一个项为当前页，添加"active"类和"aria-current"属性
      listItem.classList.add("active");
      listItem.setAttribute("aria-current", "page");
      listItem.textContent = decodeURIComponent(path[i]);
    }

    breadcrumbList.appendChild(listItem);
  }

  // 将面包屑导航添加到页面中的一个元素中
  var breadcrumbNav = document.createElement("nav");
  breadcrumbNav.setAttribute("aria-label", "breadcrumb");
  breadcrumbNav.style.setProperty("--bs-breadcrumb-divider", "'> '");
  breadcrumbNav.appendChild(breadcrumbList);

  document.getElementById("breadcrumbs").appendChild(breadcrumbNav);
}
```

# Auto Adjust Layout JS

```
<script>
    function adjustLayout() {
        var container = document.querySelector('ol');
        if (window.innerWidth >= 800) {
            container.style.columnCount = '3';
        } else if (window.innerWidth >= 500) {
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
```

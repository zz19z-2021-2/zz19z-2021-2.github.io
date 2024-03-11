// ********** 显示弹窗 **********

function displayToast() {
    const toastLiveExample = document.getElementById("liveToast");
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);

    toastBootstrap.show();  
}

// ********** 计时器 **********

// +++++ 使用说明 +++++
// 倒计时标题加id="timer-title"
// 设置目标时间 年月数不变，日数+1（e.g. 目标为18日，则需要填写17）
var timerDate = new Date("Mar 25, 2024 08:00:00")
// 日、小时、分钟、秒元素需要添加对应id=[days|hours|minutes|seconds]
// 以上时间元素需要用<div class="countdown">包围起来
// 使用修改时间功能，需要定义<input type="datetime-local" id="dateTimePicker">
// 显示当前目标日期，需要元素id="target_date"
// 修改日期后的确认按钮上，需要添加onclick="timerChangeDate()"

function timerSetTextSize() {
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
        document.getElementById("timer-title").className = "text-center card-title mt-0 mb-0";
    } else { // 大屏幕
    document.getElementById("timer-title").className = "text-center card-title mt-3";
    }
}

// ========== 以上是响应式设计部分 ==========
// ========== 以下是倒计时部分 ==========

var countDownDate = timerDate.getTime();
var days, hours, minutes;
var interval;

function timerCountdown() {
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
        alertDiv.id = "timer-end-alert"
        alertDiv.innerHTML = "倒计时已经结束!";
        document.getElementById("timer-title").appendChild(alertDiv);

        // 隐藏原倒计时
        document.querySelector(".countdown").style.display = "none";
    }
}
function timerFirstLoad() {
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

    return year + "年" + month + "月" + day + "日 " + weeks[week] + hour + ":" + minute + ":" + second;
}
function timerChangeDate() {
    // 获取选中的日期
    var date = document.getElementById("dateTimePicker").value;
    countDownDate = new Date(date).getTime();
    timerFirstLoad()
    // 更新模态触发按钮显示的中文日期
    document.getElementById("target_date").innerText = "当前目标时间：" + getChineseDate(date);

    document.getElementById("timer-end-alert").remove();
    document.querySelector(".countdown").style.display = "block";

    clearInterval(interval);
    interval = setInterval(function() {
        timerCountdown();
    }, 1000);
}

// ********** 功能初始化部分 **********

function timerInitialize() {
    // 调用函数,设置文字大小
    window.addEventListener("resize", function(){
        timerSetTextSize();
    });
    timerSetTextSize();
    timerFirstLoad()
    timerCountdown()
    // 调用函数,每秒刷新一次
    interval = setInterval(function() {
        timerCountdown();
    }, 1000);
    document.getElementById("target_date").innerText = "当前目标时间：" + getChineseDate(timerDate);
}

<link rel="stylesheet" type="text/css" href="style.css">

<div class="btn-group">
<a href="https://zz19z-2021-2.github.io/"><button class="button">首页</button></a>
<a href="https://zz19z-2021-2.github.io/overview.html"><button class="button">内容总览</button></a>
<a href="https://zz19z-2021-2.github.io/feedback.html"><button class="button">反馈 / 帮助</button></a>
<a href="https://zz19z-2021-2.github.io/Spaces/spaces.html"><button class="button">个人空间</button></a>
</div>

<p style="clear:both"></p>

# 帮助 / 反馈

如果你在阅读我们的网站时遇到问题或有建议想给我提出，请通过下面的表单向我们发送消息：

想要编辑个人主页？从这里发送给我们审核！

<form id="my-form" action="https://www.maildock.ink/state/send/mail?posId=aea721f3469c4d3291fdb606ede25e21" method="POST">
  <label>
    你的姓名：<br />
    <textarea rows="1" cols="20" style="font-size:20px;width:100%" required="required" placeholder="必填" name="姓名"></textarea>
  </label>
  <br />
  <label>
    你想说的：<br />
    <textarea rows="10" cols="20" style="font-size:20px;width:100%" name="消息" required="required" placeholder="必填"></textarea>
  </label>
  <br />
  <button id="my-form-button" style="font-size:16px; background-color:white; border:2px solid DodgerBlue; padding:12px; border-radius:4px; cursor:pointer; text-align:center; float:left; transition-duration: 0.2s;">提交</button>
  <br />
</form>
<script>
    var form = document.getElementById("my-form");
  async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    status.innerHTML = "提交成功！Thank you very much.";
    form.reset()
  }).catch(error => {
    status.innerHTML = "Oh, no！你的建议提交失败，请稍后再试。"
  });
}
form.addEventListener("submit", handleSubmit)
</script>



<p style="clear:both">Note: 点击提交之后你的设备会直接提交。所以点击提交之后你就可以离开这个页面啦！</p>
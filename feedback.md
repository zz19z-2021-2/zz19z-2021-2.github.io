<link rel="stylesheet" type="text/css" href="style.css">

# 帮助 / 反馈

如果你在阅读我们的网站时遇到问题或有建议想给我提出，请通过下面的表单向我们发送消息：

想要编辑个人主页？从这里发送给我们审核！

<form id="my-form" action="https://formspree.io/f/mdoyqljy" method="POST">
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
  <label>
  <button id="my-form-button" style="font-size:17px;width:10%">提交</button>
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

<a href="https://zz19z-2021-2.github.io/"><button class="button link">回到首页</button></a>
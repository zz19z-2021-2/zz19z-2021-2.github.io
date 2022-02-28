# 欢迎

你好，这里是由郑州市第十九初级中学2021级2班——笑草班建立的网站。为保护这个网站，我们没有将它开放给搜索引擎。所以来到这里的大概都是老熟人吧～

我们的网址是https://zz19z-2021-2.github.io/，github.io是固定一级域名（因为我们没有钱购买自己的域名）；“zz19z”即“郑州十九中”，“2021”即“2021级”，“2”即“2班”。这样，我们的网站就有了自己的名字：郑州十九中-2021级-2班。

# 新闻

## 2022元旦联欢会

这个视频可花费了我们不少时间呢……不管怎么说，它终于来了。

我们原定在七年级上册期末考试前完成视频制作，后来因为要复习便“咕”到了考试之后制作。结果更是人算不如天算——期末考试自己“咕”到了七年级下册。如果这么算的话，我们似乎还提前发布了呢！

不说废话了，视频在这：

<video src="Files/2022元旦联欢会.mp4"></video>

（以上视频是由于网站限制而被压缩到了2GiB的版本，但和原视频画质并没有太大区别。视频源文件在[这里](https://www.123pan.com/s/PE5A-TNNF3)，约3.9GiB大小）

## 我们的网站由你来设计

建立这个网站以后，我们对它的使用仅仅停留在了“给我们的视频一个家”的地步。设计一个网站是很难的。它不仅要简洁明了，要让别人一看就明白网站的基本结构；而且内容要充实，获取信息的效率要高。这些要求对我们来说太高了，但只要大家集思广益，这并不是一件难事。“只要思想不滑坡，办法总比困难多。”

怎么参与呢？方法有二，第一种则是到学校和我们（邱家杨、胡志宇、赵妙格等）直接谈，第二种则是通过下面的表单给我们发送信息，主要是为了传输一些不方便在校交流的资料（比如图片、网站地址等）。

<form id="my-form" action="https://formspree.io/f/mdoyqljy" method="POST">
  <label>
    你的姓名：<br />
    <textarea rows="1" cols="20" style="font-size:20px" required="required" placeholder="必填" name="姓名"></textarea>
  </label>
  <br />
  <label>
    你的建议或意见：<br />
    <textarea rows="3" cols="20" style="font-size:20px" name="消息" required="required" placeholder="必填"></textarea>
  </label>
  <br />
  <label>
    附件（如图片、视频等，多个文件请压缩为.zip格式文件）：<br />
    <input type="file" name="附件" style="font-size:17px">
  </label>
  <br />
  <button id="my-form-button" style="font-size:17px">提交</button>
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
    status.innerHTML = "感谢您的建议！";
    form.reset()
  }).catch(error => {
    status.innerHTML = "Oh, no！你的建议提交失败，请稍后再试。"
  });
}
form.addEventListener("submit", handleSubmit)
</script>

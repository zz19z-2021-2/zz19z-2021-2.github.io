function displayToast() {
    const toastLiveExample = document.getElementById("liveToast");
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);

    toastBootstrap.show();

    var time_now = Date.now();
    // var time_now_parsed = Date.parse(time_now);
    var time_now_elem = document.getElementById("time_now");
    // time_now_elem.innerHTML = time_now_parsed;
  
}
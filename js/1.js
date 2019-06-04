window.onload=function () {
    var hitokoto = document.querySelector('.hitokoto');
    var from = document.querySelector('.from');
    update();
    function update() {
        gethi = new XMLHttpRequest();
        gethi.open("GET","https://sslapi.hitokoto.cn/?c=a");
        gethi.send();
        gethi.onreadystatechange = function () {
            if (gethi.readyState===4 && gethi.status===200) {
                var Hi = JSON.parse(gethi.responseText);
                hitokoto.innerHTML = Hi.hitokoto;
                from.innerHTML = "——" + Hi.from + "</b>"; //可自定义输出格式
            }
        }
    }
}

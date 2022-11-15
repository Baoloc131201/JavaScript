var eKey = document.querySelector(".key");
var eLocation = document.querySelector(".location");
var eWhich = document.querySelector(".which");
var eCode = document.querySelector(".code");
var alert = document.querySelector(".alert");
var box = document.querySelector(".box");
var result = document.querySelector(".result");
alert.addEventListener("click", function() {
    box.classList.toggle("hide");
    alert.classList.toggle("hide");
})
document.addEventListener("keydown", function(e) {
    eKey.innerText = e.key;
    eLocation.innerText = e.location;
    eWhich.innerText = e.which;
    eCode.innerText = e.code;
    result.innerText = e.which;
})
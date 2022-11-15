var modal = document.querySelector(".modal");
var modalInner = document.querySelector(".modal-inner");
var btnClose = document.querySelector(".btn-close");
var btn = document.querySelector(".btn");
var Icon = document.querySelector(".modal-header i");
btn.addEventListener("click", Clickbtn);
Icon.addEventListener("click", Clickbtn);
btnClose.addEventListener("click", Clickbtn);

function Clickbtn() {
    modal.classList.toggle("hide");

}

// function clickClose() {
//     modal.classList.add("hide");
//     modalInner.style.display = "none";
// }

// function clickIcon() {
//     modal.classList.add("hide");
//     modalInner.style.display = "none";
// }
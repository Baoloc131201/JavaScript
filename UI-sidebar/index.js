var containerIcon = document.querySelector(".container-icon");
var containerWrap = document.querySelector(".container-swrap-sidebar")
containerIcon.addEventListener("click", function() {
    containerWrap.classList.toggle("open");
});
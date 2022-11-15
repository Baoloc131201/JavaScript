const btnclick = document.querySelector(".search-box__btn");
btnclick.addEventListener("click", function() {
    this.parentElement.classList.toggle("open");
    this.previousElementSibling.focus();
});
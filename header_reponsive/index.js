var toggle = document.querySelector(".toggle");
var menu = document.querySelector(".list-item");
var show = "is-show";
toggle.addEventListener("click", clickToggle);

function clickToggle() {
    menu.classList.add(show);
}
window.addEventListener("click", function(e) {
    if (!menu.contains(e.target) && !e.target.matches(".toggle")) {
        menu.classList.remove(show);
    }
})
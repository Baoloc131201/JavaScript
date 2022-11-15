const password = document.querySelector(".password");
const bx = document.querySelector(".bx");

bx.addEventListener("click", ClickType);

function ClickType() {
    if (password.type === "password") {
        password.setAttribute("type", "text");
        bx.classList.add("bx-hide");
        bx.classList.remove("bx-show");
    } else {
        password.setAttribute("type", "password");
        bx.classList.remove("bx-hide");
        bx.classList.add("bx-show");
    }
}
function toast({ title = "", message = "", type = "success", duration = 3000 }) {
    const main = document.getElementById("toast");
    if (main) {
        const toast = document.createElement("div");
        const AutoRemoveId = setTimeout(function() {
            main.removeChild(toast);
        }, duration + 1000);
        toast.addEventListener("click", function(e) {
            if (e.target.closest(".toast__close")) {
                main.removeChild(toast);
                clearTimeout(AutoRemoveId);
            }
        })
        const icons = {
            success: "<i class='bx bx-check'></i>",
            infor: "<i class='bx bx-info-circle'></i>",
            warning: "<i class='bx bx-bug-alt'></i>",
            error: "<i class='bx bx-error'></i>"
        }
        const icon = icons[type];
        const delay = (duration / 1000).toFixed(2);
        toast.classList.add("toast", `toast--${type}`);
        toast.style.animation = `slideInleft ease 2s, fadeOut linear 1s ${delay}s forwards`;
        toast.innerHTML = `
                <div class="toast__icon">
                    ${icon}
                </div>
                <div class="toast__body">
                    <h3 class="toast__title">${title}</h3>
                    <div class="toast__msg">${message}</div>
                </div>
                <div class="toast__close">
                    <i class='bx bx-window-close'></i>
                </div>
        `
        main.appendChild(toast);

    }
}


var btnSuccess = document.querySelector(".btn-success-toast");
var btnError = document.querySelector(".btn-error-toast");
btnSuccess.addEventListener("click", function() {
    toast({
        title: "Thành Công!",
        message: "Máy vi tính kết nối thành công Internet",
        type: "success",
        duration: 6000
    })
});

btnError.addEventListener("click", function() {
    toast({
        title: "Thất Bại!",
        message: "Máy vi tính đã bị virus",
        type: "warning",
        duration: 6000
    })
})
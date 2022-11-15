var elementsucces = document.querySelector(".Show-success");
var elementwarning = document.querySelector(".Show-warning");
var elementerror = document.querySelector(".Show-error");

elementsucces.addEventListener("click", () =>
    creatToast("success")
);



elementwarning.addEventListener("click", () =>
    creatToast("warning")
);


elementerror.addEventListener("click", () =>
    creatToast("error")
);

function creatToast(status) {
    console.log("hello");
    var templateInner = `<i class='bx bx-error-circle'></i>
            <span class="text-message">This is a success message</span>`;
    switch (status) {
        case "success":
            templateInner;
            break;
        case "warning":
            templateInner = `<i class='bx bx-error-circle'></i>
                    <span class="text-message">This is a warning message</span>`;
            break;
        case "error":
            templateInner = `<i class='bx bx-error-circle'></i>
                    <span class="text-message">This is a error message</span>`;
            break;
        default:
            break;
    }
    //     <div class="container-Toast success">
    //         <i class='bx bx-error-circle'></i>
    //         <span class="text-message">This is a success message</span>
    //         <span class="time-toast"></span>
    //     </div>

    //     <div class="container-Toast warning">
    //         <i class='bx bx-error-circle'></i>
    //         <span class="text-message">This is a warning message</span>
    //         <span class="time-toast"></span>
    //     </div>

    //     <div class="container-Toast error">
    //         <i class='bx bx-error-circle'></i>
    //         <span class="text-message">This is a error message</span>
    //         <span class="time-toast"></span>
    //     </div>



    const container_Toast = document.createElement("div");
    container_Toast.classList.add("container-Toast");
    container_Toast.classList.add(status);
    container_Toast.innerHTML = `${templateInner}
                                 <span class="time-toast"></span>`
    var toastList = document.querySelector(".container-wrap-toast");
    toastList.appendChild(container_Toast);
    setTimeout(function() {
        container_Toast.style.animation = `slide_hide 2s ease forwards`;
    }, 2000);
    setTimeout(function() {
        container_Toast.remove();
    }, 4000);
}
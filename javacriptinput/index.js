var textarea = document.querySelector(".text-area");
var showbutton = document.querySelector(".show-button");
var city = document.querySelector(".container-option");
var result = document.querySelector(".result");
showbutton.addEventListener("click", clickbutton);

function clickbutton() {
    var gender = document.querySelector(".gender:checked");
    result.innerHTML = `Hello: ${textarea.value}</br>
    Thành Phố của bạn: ${city.value}</br>
    Giới tính: ${gender.value}
    `;
}
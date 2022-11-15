var username = document.querySelector(".username");
var email = document.querySelector(".email");
var password = document.querySelector(".password");
var confirmPassword = document.querySelector(".confirm-password");
var form = document.querySelector("form");


function showError(input, message) {
    var parrent = input.parentElement;
    var titleEr = parrent.querySelector(".title-error");
    parrent.classList.add("error");
    titleEr.innerText = message;
}

function showSucces(input) {
    var parrent = input.parentElement;
    var titleEr = parrent.querySelector(".title-error");
    parrent.classList.remove("error");
    titleEr.innerText = "";
}

function checkEmptyError(listinput) {
    listinput.forEach((input) => {
        input.value = input.value.trim();
        if (input.value === "") {
            showError(input, "Không được để trống");
        } else {
            showSucces(input);
        }
    });
}

function checkInputLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, "Vui lòng nhập tối thiểu 3 kí tự");
    } else if (input.value.length > max) {
        showError(input, "Vui lòng không vượt quá 100 kí tự");
    } else {
        showSucces(input);
    }
}

// function checkInputLength(listInput, min, max) {
//     listInput.forEach((item) => {
//         if (item.value.length < min) {
//             showError(item, `Vui lòng nhập tối thiểu ${min} kí tự`);
//         } else if (item.value.length > max) {
//             showError(item, `Vui lòng không vượt quá ${max} kí tự`);
//         } else {
//             showSucces(item);
//         }
//     })
// }
function OnBlur(listInput) {
    listInput.forEach((item) => {
        var parrent = item.parentElement;
        var error = parrent.querySelector(".title-error");
        item.addEventListener("focus", function() {
            console.log(parrent);
            error.innerText = "";
            parrent.classList.remove("error");
        });
    })
}

function checkRegexEmail(input) {
    var emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    input.value = input.value.trim();
    var isEmailError = emailRegex.test(input.value);
    if (emailRegex.test(input.value)) {
        showSucces(input);
    } else {
        showError(input, "Email không hợp lệ");
    }
    return isEmailError;
}

function checkPasswordConfirm(passwordInput, PasswordCf) {
    if (passwordInput.value.length < 5) {
        showError(passwordInput, "Vui lòng nhập tối thiểu 5 kí tự");
    }
    if (passwordInput.value !== PasswordCf.value) {
        showError(PasswordCf, "Mật khẩu không trùng khớp");
    } else {
        showSucces(PasswordCf);
    }
}


form.addEventListener("submit", function(e) {
    e.preventDefault();
    checkEmptyError([username, email, password, confirmPassword]);
    checkInputLength(username, 3, 100);
    checkRegexEmail(email);
    checkPasswordConfirm(password, confirmPassword);
    OnBlur([username, email, password, confirmPassword]);
});
var inputTask = document.querySelector(".addTask input");
var btnAdd = document.querySelector(".btnaddTask");
inputTask.addEventListener("keyup", (e) => {
    console.log(e.keycode);
    (e.keycode === 13 ? addlist() : null)
})
btnAdd.addEventListener("click", function() {
    addlist();
})

function addlist() {
    var Notcompleted = document.querySelector(".notCompleted");
    var completed = document.querySelector(".Completed");
    var newLi = document.createElement("li");
    newLi.classList.add("item-notCompleted");
    var checkbtn = document.createElement("button");
    var del = document.createElement("button");
    checkbtn.innerHTML = "<i class='bx bx-check-square'></i>";
    del.innerHTML = "<i class='bx bx-message-square-x'></i>";

    if (inputTask.value != "") {
        newLi.textContent = inputTask.value;
        inputTask.value = "";
        Notcompleted.appendChild(newLi);
        newLi.appendChild(checkbtn);
        newLi.appendChild(del);
    }

    checkbtn.addEventListener("click", function() {
        var parent = this.parentNode;
        console.log(parent);
        parent.remove();
        completed.appendChild(parent);
        checkbtn.style.display = "none";
    })
    del.addEventListener("click", function() {
        var parent = this.parentNode;
        console.log(parent);
        parent.remove();
    })
}
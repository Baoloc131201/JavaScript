const input = document.querySelector(".input");
const listitem = document.querySelectorAll(".container-list li");
const arrayUl = [...listitem];
console.log(arrayUl.value);
console.log(listitem);
arrayUl.forEach((item, index) => {
    item.addEventListener("click", function() {

        console.log(item.innerText);
        input.value = item.innerText;
    })
})
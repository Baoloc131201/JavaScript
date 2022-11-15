const menuToggle = document.querySelector(".menuToggle");
const navigation = document.querySelector(".navigation");
const list = [...document.querySelectorAll(".list-item .item-container")];
console.log(list)
menuToggle.addEventListener("click", function() {
    navigation.classList.toggle("open");
});

list.forEach((item) => {
    item.addEventListener("click", function() {
        const activeItem = list.find((item) => { return item.matches(".active") });
        if (activeItem) {
            activeItem.classList.remove("active")
        }
        if (!item.matches(".active")) {
            item.classList.add("active");
        }
    })
});
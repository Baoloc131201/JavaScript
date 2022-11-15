var cardSizes = [...document.querySelectorAll(".card_size span")];
var cardAction = [...document.querySelectorAll(".card_action .btn")];
var cardHeart = document.querySelector(".card_heart i");


var bg = "is-show";
var color = "is-show-color";
cardHeart.addEventListener("click", likeChange);

cardAction.forEach((course) => {
    course.addEventListener("click", function() {
        clickButton(course);
    });
});

function clickButton(course) {
    const activeButton = cardAction.find(item => { return item.matches(".btn-cusor") });
    if (activeButton) {
        activeButton.classList.remove("btn-cusor");
    }
    if (!course.matches(".btn-cusor")) {
        course.classList.add("btn-cusor");
    }
}
cardSizes.forEach((course) => {
    course.addEventListener("click", function() {
        const activeElement = cardSizes.find(item => item.matches(".is-show"));
        // if (activeElement) {
        //     activeElement.classList.remove("is-show");
        // }
        // if (!course.matches(".is-show")) {
        //     course.classList.add("is-show");
        // }
        activeElement && activeElement.classList.remove("is-show");
        !course.matches(".is-show") && course.classList.add("is-show");
    });
})

function likeChange() {
    cardHeart.classList.toggle(color);
}
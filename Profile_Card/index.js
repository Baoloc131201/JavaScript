var social = document.querySelectorAll(".item-link i");
console.log(social);
var ArraySocial = [...social];

ArraySocial.forEach(function(course) {
    course.addEventListener("click", function() {
        clickItemlink(course);
    });
});

function clickItemlink(course) {
    const Active = ArraySocial.find(item => { return item.matches(".active") });
    if (Active) {
        Active.classList.remove("active");
    }
    if (!course.matches(".active")) {
        course.classList.add("active");
    }
}
var listImage = document.querySelectorAll(".image-left");

listImage.forEach(function(course) {
    course.addEventListener("click", handleChange);
});

function handleChange(e) {
    var source = e.target.getAttribute("src");
    var imgRight = document.querySelector(".image-right");
    imgRight.setAttribute("src", source);
}
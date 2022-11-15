var bird1 = document.querySelector(".bird1");
var bird2 = document.querySelector(".bird2");
var text = document.querySelector(".text");
var btn = document.querySelector(".btn");
var rocks = document.querySelector(".rocks");
var forest = document.querySelector(".forest");
var water = document.querySelector(".water");
var header = document.querySelector(".header");


window.addEventListener("scroll", handleScroll);

function handleScroll() {
    var value = window.scrollY;
    console.log(bird1.value);
    text.style.top = 40 + value * -0.5 + "%";
    bird1.style.top = value * -1.5 + "px";
    bird1.style.left = value * 2 + "px";
    bird2.style.top = value * -1.5 + "px";
    bird2.style.left = value * -2 + "px";
    btn.style.marginTop = value * 1.5 + "px";
    rocks.style.top = value * 0.12 + "px";
    forest.style.top = value * 0.5 + "px";

    header.style = `background-color:#fff; position:fixed; box-shadow: rgb(0 0 0 / 18%) 0px 6px 12px 0px`;
    if (value === 0) {
        text.style.top = "232px";
        bird1.style.top = "0";
        text.style.transition = "ease-in 1s";
        bird1.style.transition = "ease-in 2s";
        bird2.style.transition = "ease-in 2s";
        header.removeAttribute("style");

    }

}
var listButton = document.querySelectorAll(".btn");
var btnPopular = document.querySelector(".btn-popular");
var btnNew = document.querySelector(".btn-buynew");
var btnBuyrun = document.querySelector(".btn-buyrun");
var ArrayButton = [...listButton];

listButton.forEach((item, index) => {
    item.addEventListener("click", function(e) {
        var Active = ArrayButton.find((item) => {
            return item.matches(".active")
        });
        if (Active) {
            Active.classList.remove("active");
        }
        if (!item.matches(".active")) {
            item.classList.add("active");

        }

    });

});

btnPopular.addEventListener("click", function() {
    document.querySelector(".popular").style.display = "block";
    document.querySelector(".new").style.display = "none";
    document.querySelector(".buy-run").style.display = "none";
})

btnNew.addEventListener("click", function() {
    document.querySelector(".popular").style.display = "none";
    document.querySelector(".new").style.display = "block";
    document.querySelector(".buy-run").style.display = "none";
})
btnBuyrun.addEventListener("click", function() {
    document.querySelector(".popular").style.display = "none";
    document.querySelector(".new").style.display = "none";
    document.querySelector(".buy-run").style.display = "block";
})
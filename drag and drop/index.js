var boxes = document.querySelectorAll(".box");
var targetlist = document.querySelectorAll(".target");
var currentTarget = null;
// dragover
//drop
targetlist.forEach((target) => {
    target.addEventListener("dragstart", function(e) {
        this.classList.add("dragging");
        currentTarget = this;
    })
    target.addEventListener("dragend", function(e) {
        this.classList.remove("dragging");
    })
})
boxes.forEach((box) => {
    box.addEventListener("dragover", function(e) {
        e.preventDefault();
        // this.appendChild(currentTarget);
    })
    box.addEventListener("drop", function() {
        if (!box.querySelector(".target")) {
            this.appendChild(currentTarget);
        }
    })
})
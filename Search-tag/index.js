var tags = document.querySelector(".content > ul");
var input = document.querySelector(".input");
var removeTag = document.querySelector(".remove-all");
var iconClose = document.querySelector(".icon-close");
var tagValues = [];



function createTags() {
    tags.innerHTML = "";
    tagValues.forEach((item) => {
        var liElement = document.createElement("li");
        liElement.classList.add("item-title");
        liElement.innerHTML = `${item.content}
             <i class='bx bx-window-close icon-close'></i>`;
        liElement.addEventListener("click", (e) => {
            if (e.target.matches("i")) {
                tagValues = tagValues.filter((i) => {
                    return i.id !== item.id;
                });
                liElement.remove();
            }
        });
        tags.appendChild(liElement);
    })
    input.focus();
}

// .onclick = (e) => {
//     if (e.target.matches("i")) {
//         tagValues = tagValues.filter(i =>
//             i.id !== item.id
//         )
//         liElement.remove();
//     }
// }
// tags.appendChild(liElement);
// });



function addTag() {
    !tagValues.find((item) =>
            item.content.toUpperCase() === input.value.trim().toUpperCase()
        ) &&
        tagValues.push({
            id: tagValues.length,
            content: input.value.trim()
        });
}
removeTag.addEventListener("click", () => {
    tagValues = [];
    tags.innerHTML = "";
});
input.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        addTag();
        createTags();
        input.value = "";
    }
});
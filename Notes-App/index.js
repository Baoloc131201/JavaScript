const addBox = document.querySelector(".add-box"),
    popupBox = document.querySelector(".popup-box"),
    popupTitle = document.querySelector("header p"),
    closeIcon = document.querySelector("header i"),
    addBtn = document.querySelector(".btn"),
    titleTag = document.querySelector(".input-title"),
    descTag = document.querySelector(".titleArea");

const months = ["January", "February", "March", 'April', "May", "June", "July", "August", "September", "October", "November", "December"];
const notes = JSON.parse(localStorage.getItem("notes") || "[]");
let isUpdate = false,
    updateId;
console.log(isUpdate);
addBox.addEventListener("click", () => {
    titleTag.focus();
    popupBox.classList.add("show");
})
closeIcon.addEventListener("click", () => {
    titleTag.value = "";
    descTag.value = "";
    popupBox.classList.remove("show");
})

function showNotes() {
    document.querySelectorAll(".note").forEach((note) => {
        note.remove();
    })
    notes.forEach((note, index) => {

        let divTag = `<div class="note">
        <div class="details">
            <p>${note.title}</p>
            <span>${note.description}</span>
        </div>
        <div class="bottom-content">
            <span>${note.date}</span>
            <div class="settings">
                <i class='bx bx-dots-horizontal-rounded'></i>
                <ul class="menu">
                    <li onclick="updateNote(${index}, ${note.title}, ${note.description})"><i class='bx bx-pencil'></i>Edit</li>
                    <li onclick="deleteNote(${index})"><i class='bx bx-trash'></i>Delete</li>
                </ul>
            </div>
        </div>
    </div>`;
        addBox.insertAdjacentHTML("afterend", divTag);
    })
}
showNotes();
var setting = document.querySelectorAll(".settings i");
setting.forEach((icon, index) => {
    icon.addEventListener("click", (e) => {
        icon.parentElement.classList.toggle("show");
        document.addEventListener("click", (e) => {
            if (e.target.tagName != "I" || e.target != icon) {
                icon.parentElement.classList.remove("show");
            }
        })
    })
});

function updateNote(noteId, title, desc) {
    isUpdate = true;
    addBox.click();
    titleTag.value = title;
    descTag.value = desc;
    addBtn.innertext = "Update Note";
    popupTitle.innertext = "Update Note title";
}

// var deleteds = document.querySelectorAll(".delete");
// console.log(deleteds);
// deleteds.forEach((deleted, index) => {
//     deleted.addEventListener("click", (index) => {
//         notes.splice(index, 1);
//         localStorage.setItem("notes", JSON.stringify(notes));
//         showNotes();
//     })
// })

function deleteNote(noteId) {
    notes.splice(noteId, 1);
    localStorage.setItem("notes", JSON.stringify(notes));
    showNotes();
}
addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let noteTitle = titleTag.value;
    let noteDesc = descTag.value;
    if (noteTitle || noteDesc) {
        let dateObj = new Date(),
            month = months[dateObj.getMonth()],
            day = dateObj.getDate(),
            year = dateObj.getFullYear();
        let noteInfo = {
            title: noteTitle,
            description: noteDesc,
            date: `${month} ${day} ${year}`
        }
        notes.push(noteInfo);
        localStorage.setItem("notes", JSON.stringify(notes));
        closeIcon.click();
        showNotes();
    }
})
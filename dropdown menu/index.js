const card = document.querySelector(".card");
const cardtoggle = document.querySelector(".toggle");
cardtoggle.addEventListener("click", handleChage);

function handleChage() {
    card.classList.toggle("active");
}
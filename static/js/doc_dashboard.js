const h = document.querySelector(".hamburger");
const n = document.querySelector(".nav");

h.addEventListener("click", () => {
    n.classList.toggle("open");
})
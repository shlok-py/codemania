const h = document.querySelector(".hamburger");
const n = document.querySelector(".nav");

h.addEventListener("click", () => {
    n.classList.toggle("open");
})

/*

const numb = document.querySelector(".numb");
const number = document.getElementById("numb").value;

let counter = 0;
setInterval(() => {
    if (counter == number) {
        clearInterval();
    } else {
        counter += 1;
        numb.textContent = counter + "mg/dL";
    }
}, 80);

*/
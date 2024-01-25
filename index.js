const nav = document.querySelector(".nav");

const boton = document.querySelector("button");

boton.addEventListener("click", () => {

    nav.classList.remove("closed");
    nav.classList.add("active");
})

nav.addEventListener("click",() => {
    nav.classList.remove("active");
    nav.classList.add("closed");
})
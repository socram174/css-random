const nav = document.querySelector(".nav");
const links = document.querySelectorAll("a");



const boton = document.querySelector("button");

boton.addEventListener("click", () => {

    nav.classList.remove("closed");
    nav.classList.add("active");
    links.forEach((link)=> {
        link.classList.add("active");
    })
})

nav.addEventListener("click",() => {
    nav.classList.remove("active");
    nav.classList.add("closed");
    links.forEach((link)=> {
        link.classList.remove("active");
    })
})
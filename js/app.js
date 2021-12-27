const burger = document.querySelector(".burger");
const nav_link = document.querySelector(".nav_link_phone");

burger.addEventListener("click", () => {
    nav_link.classList.toggle("active");
})  
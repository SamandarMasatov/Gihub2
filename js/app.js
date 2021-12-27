const burger = document.querySelector(".burger");
const nav_link = document.querySelector(".nav_link");

burger.addEventListener("click", () => {
    nav_link.classList.toggle("active");
}) 
//javascript of responsive navigation bar
const menuBar = document.querySelector(".menu-bar");
const navBar = document.querySelector(".nav-bar");

menuBar.addEventListener("click", () => {
    menuBar.classList.toggle("active");
    navBar.classList.toggle("active");
})
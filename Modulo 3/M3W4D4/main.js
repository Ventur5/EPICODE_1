const burgerMenuButton = document.querySelector(".burger-menu");
const hamburgerIcon = document.querySelector(".hamburger-icon"); // 👈 usa solo questo!
const sideBar = document.querySelector(".side-bar");
const menu = document.querySelector(".menu");
const heroImg = document.querySelector(".hero-img");

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    heroImg.classList.add("img-translate");
  }, 300);
});

function toggleElementClass(element, className) {
  element.classList.toggle(className);
}

burgerMenuButton.addEventListener("click", () => {
  hamburgerIcon.classList.toggle("animate");

  sideBar.classList.toggle("show");
  menu.classList.toggle("menu-opacity");
});

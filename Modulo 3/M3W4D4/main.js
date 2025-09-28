const burgerMenuButton = document.querySelector('.burger-menu');
const burgerIcons = document.querySelectorAll('.hamburger-icon');
const sideBar = document.querySelector('.side-bar');
const menu = document.querySelector('.menu');
const navBar = document.querySelector('nav');
const heroImg = document.querySelector('.hero-img');

window.addEventListener('DOMContentLoaded', () => {
  showHeroImage();
});

function showHeroImage() {
  heroImg.classList.add('img-translate');
}

function toggleElementClass(element, className) {
  element.classList.toggle(className);
}

function toggleBurgerAnimation() {
  burgerIcons.forEach((icon) => {
    toggleElementClass(icon, 'animate');
  });
}

function toggleSidebar() {
  toggleElementClass(sideBar, 'show');
}

function toggleMenuOpacity() {
  toggleElementClass(menu, 'menu-opacity');
}

function toggleNavbarColor() {
  toggleElementClass(navBar, 'navbar-color');
}

burgerMenuButton.addEventListener('click', () => {
  toggleBurgerAnimation();
  toggleSidebar();
  toggleMenuOpacity();
  toggleNavbarColor();
});

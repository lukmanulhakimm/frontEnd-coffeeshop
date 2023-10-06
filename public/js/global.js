// hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// dropDown
const dropDown = document.querySelector("#drop-down");
const menuDown = document.querySelector("#menu-down");

dropDown.addEventListener("click", function () {
  menuDown.classList.toggle("hidden");
});

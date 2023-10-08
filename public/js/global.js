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

const modalTrigger = document.querySelector("#modal-trigger");
const modalCancelBtn = document.querySelector("#modal-cancel-btn");
const modalConfirmBtn = document.querySelector("#modal-confirm-btn");
const modal = document.querySelector("#modal");

modalTrigger.addEventListener("click", function () {
  modal.classList.add("flex");
  modal.classList.remove("hidden");
});

modalConfirmBtn.addEventListener("click", function () {
  modal.classList.remove("flex");
  modal.classList.add("hidden");
});
modalCancelBtn.addEventListener("click", function () {
  modal.classList.remove("flex");
  modal.classList.add("hidden");
});

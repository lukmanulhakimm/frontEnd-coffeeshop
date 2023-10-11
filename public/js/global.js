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

const btnLogoutNav = document.querySelector(".nav-logOut");
const btnLogout = document.querySelector(".mobile-logOut");
const modalLogout = document.querySelector("#modal-Logout");
const confirmLogout = document.querySelector("#confirm-btn-logout");
const cancelLogout = document.querySelector("#cancel-btn-logout");
// modal logout

const showModal = () => {
  modalLogout.classList.add("flex");
  modalLogout.classList.remove("hidden");
};

const hideModal = () => {
  modalLogout.classList.add("hidden");
  modalLogout.classList.remove("flex");
};
btnLogout.addEventListener("click", showModal);
btnLogoutNav.addEventListener("click", function () {
  console.log("blalala");
});
confirmLogout.addEventListener("click", hideModal);
cancelLogout.addEventListener("click", hideModal);

const modalTrigger = document.querySelector("#modal-trigger");
const modalCancelBtn = document.querySelector("#modal-cancel-btn");
const modalConfirmBtn = document.querySelector("#modal-confirm-btn");
const modal = document.querySelector("#modal");
// modal checkout
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

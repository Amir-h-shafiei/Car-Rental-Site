const headerBtn = document.querySelector(".header__menu");
const headerNav = document.querySelector(".header__nav-auth");
const showIcon = document.querySelector(".bx-menu-left");
const hideIcon = document.querySelector(".bx-x");

headerBtn.addEventListener("click", () => {
  const isOpen = headerNav.classList.toggle("show");
  showIcon.style.display = isOpen ? "none" : "block";
  hideIcon.style.display = isOpen ? "block" : "none";
});
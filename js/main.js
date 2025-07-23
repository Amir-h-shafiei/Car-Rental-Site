const headerBtn = document.querySelector(".header__menu");
const headerNav = document.querySelector(".header__nav-auth");
const showIcon = document.querySelector(".bx-menu-left");
const hideIcon = document.querySelector(".bx-x");

headerBtn.addEventListener("click", () => {
  const isOpen = headerNav.classList.toggle("show");
  showIcon.style.display = isOpen ? "none" : "block";
  hideIcon.style.display = isOpen ? "block" : "none";
});

const filterBtns = document.querySelectorAll(".cars__list-btn button");
const carCards = document.querySelectorAll(".cars__card");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const brand = btn.dataset.brand; 
    carCards.forEach((card) => {
      if(card.dataset.brand === brand || brand === "all"){
        card.style.display = "block";
      }
      else{
        card.style.display = "none";
      }
    });
    filterBtns.forEach((b) =>{
      b.classList.replace("btn-primary","btn-secondary");
      console.log(b);
    });
    btn.classList.replace("btn-secondary","btn-primary");
  });
});

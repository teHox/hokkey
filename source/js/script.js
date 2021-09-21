const burgerButton = document.querySelector(".burger");
const navigationButton = document.querySelector(".navigation");
const navigationList = document.querySelector(".navigation__list");
const opacityBG = document.querySelector(".opacity-bg");

const headerPagination = document.querySelector(".header-pagination");

// scripts
// burger

burgerButton.addEventListener("click", burgerMenuHadler);
opacityBG.addEventListener("click", burgerMenuHadler);

function burgerMenuHadler() {
  burgerButton.classList.toggle("burger_active");
  navigationButton.classList.toggle("navigation_active");
  navigationList.classList.toggle("navigation__list_active");
  opacityBG.classList.toggle("opacity-bg_active");

  document.querySelector("body").classList.toggle("hide-scrollbar-y");
}

const NAV_MAIN = document.querySelector(".main-nav");
const NAV_TOGGLE = document.querySelector(".main-nav__toggle");

NAV_MAIN.classList.remove("main-nav--nojs");

NAV_TOGGLE.addEventListener("click", function () {
  if (NAV_MAIN.classList.contains('main-nav--closed')) {
    NAV_MAIN.classList.remove('main-nav--closed');
    NAV_MAIN.classList.add('main-nav--opened');
  } else {
    NAV_MAIN.classList.remove('main-nav--opened');
    NAV_MAIN.classList.add('main-nav--closed');
  }
});

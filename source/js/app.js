const NAVMAIN = document.querySelector(".main-nav");
const NAVTOGGLE = document.querySelector(".main-nav__toggle");

NAVMAIN.classList.remove("main-nav--nojs");

NAVTOGGLE.addEventListener("click", function () {
  if (NAVMAIN.classList.contains('main-nav--closed')) {
    NAVMAIN.classList.remove('main-nav--closed');
    NAVMAIN.classList.add('main-nav--opened');
  } else {
    NAVMAIN.classList.remove('main-nav--opened');
    NAVMAIN.classList.add('main-nav--closed');
  }
});

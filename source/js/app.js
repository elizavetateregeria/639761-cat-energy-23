document.addEventListener("DOMContentLoaded", () => {
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
});

function initMap() {
    const CAT_ENERGY = { lat: 59.938850840429865, lng: 30.32307958505938 };
    const MAP = new google.maps.Map(document.getElementById("map"), {
      center: CAT_ENERGY,
      zoom: 18,
    });

    const ICON_MARKER = "../img/map-pin.png";

    const MARKER = new google.maps.Marker({
      position: CAT_ENERGY,
      icon: ICON_MARKER,
      map: MAP,
    });
  }

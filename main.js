const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".hamburger__menu");
const navbar2 = document.querySelector(".navbar__two");
const underlay = document.querySelector(".underlay");

let showMenu = false;

hamburger.addEventListener("click", function () {
  if (!showMenu) {
    navbar2.classList.add("open");
    underlay.classList.add("open");
    menu.classList.add("open");
    showMenu = true;
  } else {
    navbar2.classList.remove("open");
    underlay.classList.remove("open");
    menu.classList.remove("open");
    showMenu = false;
  }
});

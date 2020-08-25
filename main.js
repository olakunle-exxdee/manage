const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".hamburger__menu");
const navbar2 = document.querySelector(".navbar__two");
const underlay = document.querySelector(".underlay");
const hero__content = document.querySelector(".hero__content");
const hero__img = document.querySelector(".hero__img");
const manage__content = document.querySelector(".manage__content");
const man = document.querySelector(".manage__content2");

gsap.fromTo(
  ".hero__content",
  { x: "20rem", opacity: 0 },
  { x: 0, opacity: 1, ease: "power3.inOut", delay: 1 }
);

gsap.fromTo(
  ".manage__content",

  {
    scrollTrigger: {
      Trigger: ".manage__content",
      start: "top center",
      toggleActions: "play none none none",
    },
    x: "-20rem",
    opacity: 0,
    screb: true,
    pin: true,
  },
  {
    scrollTrigger: ".manage__content",
    x: 0,
    opacity: 1,
    ease: "power3.inOut",
    delay: 0.3,
  }
);

gsap.fromTo(
  ".hero__img",
  { x: "-20rem", opacity: 0 },
  { x: 0, opacity: 1, ease: "back.out(1)", delay: 0.5 }
);

var tl = gsap.timeline();

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

"use strict";

const hamburger = document.querySelector(".hamburger");
const gnav = document.querySelector(".gnav");
const closeArea = document.querySelector(".bg-btn");
const navLinks = document.querySelectorAll(".gnav a");

const openMenu = () => {
  hamburger.classList.add("open");
  gnav.classList.add("open");
  closeArea.classList.add("open");
  hamburger.setAttribute("aria-expanded", "true");
};

const closeMenu = () => {
  hamburger.classList.remove("open");
  gnav.classList.remove("open");
  closeArea.classList.remove("open");
  hamburger.setAttribute("aria-expanded", "false");
};

const toggleMenu = () => {
  if (gnav.classList.contains("open")) {
    closeMenu();
  } else {
    openMenu();
  }
};

hamburger.addEventListener("click", toggleMenu);
closeArea.addEventListener("click", closeMenu);

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", closeMenu);
});

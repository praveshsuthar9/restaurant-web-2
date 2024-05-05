const toggle = document.getElementById("toogle-btn");
const navbar = document.querySelector("nav");

const home = document.querySelector(".home");
const about = document.querySelector(".about");
const work = document.querySelector(".work");
const contact = document.querySelector(".contact");

home.addEventListener("click", () => {
  home.style.color = "#fe9e0d";
  about.style.color = "#4c4c4c";
  work.style.color = "#4c4c4c";
  contact.style.color = "#4c4c4c";
});
about.addEventListener("click", () => {
  about.style.color = "#fe9e0d";
  home.style.color = "#4c4c4c";
  work.style.color = "#4c4c4c";
  contact.style.color = "#4c4c4c";
});
work.addEventListener("click", () => {
  work.style.color = "#fe9e0d";
  about.style.color = "#4c4c4c";
  home.style.color = "#4c4c4c";
  contact.style.color = "#4c4c4c";
});
contact.addEventListener("click", () => {
  contact.style.color = "#fe9e0d";
  about.style.color = "#4c4c4c";
  work.style.color = "#4c4c4c";
  home.style.color = "#4c4c4c";
});

toggle.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

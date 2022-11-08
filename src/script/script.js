import { contactPt } from "./modal.js";
AOS.init();

const language = document.querySelector(".language");
const checkbox = document.querySelector("#toggle");
const checked = localStorage.getItem("check");
const contact = document.querySelector("#contact");
const menuBtm = document.querySelector("#profile-avatar");
const menu = document.querySelector(".menu");
const btms = document.querySelectorAll(".btm-menu");
let size = window.innerWidth;
menuBtm.addEventListener("click", () => {
  let size = window.innerWidth;
  console.log(menu);
  if (size <= 1000) {
    menu.classList.toggle("menu-click");
    console.log(size);
  }
});
if (size <= 1000) {
  btms.forEach((btm) => {
    btm.addEventListener("click", () => {
      menu.classList.toggle("menu-click");
    });
  });
}

checkbox.addEventListener("click", () => {
  const check = checkbox.checked;

  localStorage.setItem("check", check);
  if (checkbox.checked == true) {
    setTimeout(() => {
      window.location.href = "./src/pages/english.html";
    }, 800);
  }
});
if (checked == "true") {
  checkbox.checked = true;
  window.location.href = "./src/pages/english.html";
} else {
  checkbox.checked = false;
}

contact.addEventListener("click", () => {
  contactPt();
});

// document.addEventListener("aos:in", ({ detail }) => {
//   console.log("animated in", detail);
// });

// document.addEventListener("aos:out", ({ detail }) => {
//   console.log("animated out", detail);
// });

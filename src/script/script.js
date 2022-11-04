import { contactPt } from "./modal.js";
const language = document.querySelector(".language");
const checkbox = document.querySelector("#toggle");
const checked = localStorage.getItem("check");
const contact = document.querySelector("#contact");
const menuBtm = document.querySelector("#profile-avatar");
const menu = document.querySelector(".menu");
menuBtm.addEventListener("click", () => {
  const size = window.innerWidth;
  console.log(menu);
  if (size <= 1000) {
    menu.classList.toggle("menu-click");
  }
});
checkbox.addEventListener("click", () => {
  const check = checkbox.checked;
  console.log(JSON.parse(checked));
  localStorage.setItem("check", check);
  if (checkbox.checked == true) {
    setTimeout(() => {
      window.location.href = "./src/pages/english.html";
    }, 800);
  } else {
    console.log("pt-br");
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

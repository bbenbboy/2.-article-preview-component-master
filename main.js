"user strict";

const button = document.querySelector(".button");
const iconsBox = document.querySelector(".iconsBox");
const iconsBoxMobile = document.querySelector(".iconsBox-mobile");

const showButton = function (e) {
  e.preventDefault;
  //   console.log("click");
  iconsBox.classList.add("active");
  iconsBox.classList.remove("hidden");
};

const hidButton = function (e) {
  e.preventDefault;
  //   console.log("Mouse over");
  iconsBox.classList.remove("active");
  iconsBox.classList.add("hidden");
};

button.addEventListener("click", showButton);
// button.addEventListener("mouseover", hidButton);

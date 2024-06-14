"use strict";

// DOM ELEMENTS
const slider = document.querySelector("#slider");
const genPassword = document.querySelector(".password");
const generateBtn = document.querySelector(".btn-genarate");
const charLength = document.querySelector(".slider-box span");
const inputBox = document.querySelectorAll("label");
const stateDots = document.querySelectorAll(".dot");
//Variables
const characters = {
  upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lower: "abcdefghijklmnopqrstuvwxyz",
  numbers: "0123456789",
  symbols: "!@#$%^&*-?",
};
const patterns = {};
let x = /[A-Z]/.test("UJH");
console.log(x);

let selectedScope = [];
let password = "";
// Functions

const randonNumber = function (max) {
  return Math.trunc(Math.random() * Math.abs(max - 0));
};

inputBox.forEach((input) => {
  input.addEventListener("click", function (e) {
    const test = selectedScope.flat();
    console.log(test.includes("4"));

    selectedScope.push(...characters[e.target.getAttribute("name")]);
    // delete characters;
    // fix addition error
    console.log(selectedScope.flat());
  });
});
slider.addEventListener("click", function () {
  charLength.textContent = slider.value;
});

generateBtn.addEventListener("click", function () {
  let counter = slider.value;
  while (counter > 0) {
    const selectedChar = selectedScope.flat();
    password += selectedChar[randonNumber(selectedChar.length)];
    console.log(selectedChar[3]);
    counter--;
  }
  genPassword.textContent = password;
  console.log(password);
  selectedScope = [];
  password = "";
  slider.value = 10;
});

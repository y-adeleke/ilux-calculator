"use strict";

// Elements
const calculationDisplay = document.querySelector("p");
const calculationSolution = document.querySelector("h1");
const clearAllButton = document.querySelector(".row-1-AC");
const deleteButton = document.querySelector(".row-1-x");
const equalButton = document.querySelector(".row-6-equalsign");
const daylight = document.querySelector("#display-daylight");
const darkmode = document.querySelector("#display-darkmode");
const allButtons = document.querySelectorAll(".btn-cl");
const timeDisplay = document.querySelector(".time");
const dayDisplay = document.querySelector(".day");

// Constants
const ZERO = "0";

// Dark and Light Mode
daylight.addEventListener("click", switchToLightMode);
darkmode.addEventListener("click", switchToDarkMode);

function switchToLightMode() {
  setInterfaceStyles("#f3ecec", "#1e1e1e");
}

function switchToDarkMode() {
  setInterfaceStyles("#1e1e1e", "#fafafa");
}

function setInterfaceStyles(background, textColor) {
  document.querySelector("#interface").style.background = background;
  calculationDisplay.style.color = textColor;
  calculationSolution.style.color = textColor;
}

// Calculator Logic
allButtons.forEach((button) => {
  button.addEventListener("click", handleButtonClick);
});

function handleButtonClick() {
  if (calculationDisplay.textContent === ZERO) {
    calculationDisplay.textContent = "";
  }

  calculationDisplay.textContent += this.textContent;
}

equalButton.addEventListener("click", calculateResult);
clearAllButton.addEventListener("click", clearAll);
deleteButton.addEventListener("click", deleteLastNumber);

function calculateResult() {
  calculationSolution.textContent = Function("return " + calculationDisplay.textContent)();
}

function clearAll() {
  calculationDisplay.textContent = ZERO;
  calculationSolution.textContent = ZERO;
}

function deleteLastNumber() {
  const delLastNumber = calculationDisplay.textContent.slice(0, -1);
  calculationDisplay.textContent = delLastNumber;
}

// Date and Time
setInterval(updateTime, 10);

function updateTime() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  timeDisplay.textContent = `${hours}:${minutes}:${seconds}`;
  const dayWord = date.getDay();
  const days = ["SUN", "MON", "TEU", "WED", "THU", "FRI", "SAT"];
  dayDisplay.textContent = days[dayWord];
}

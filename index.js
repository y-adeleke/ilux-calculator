`use strict`;

///
const calcShow = document.querySelector("p");
const calSolution = document.querySelector("h1");
const clearAllButton = document.querySelector(".row-1-AC");
const deleteButton = document.querySelector(".row-1-x");
const equalButton = document.querySelector(".row-6-equalsign");
const daylight = document.querySelector("#display-daylight");
const darkmode = document.querySelector("#display-darkmode");
const allButtons = document.querySelectorAll(".btn-cl");
const time = document.querySelector(".time");
const day = document.querySelector(".day");

//////////// DARK AND LIGHT MODE   ////////////
daylight.addEventListener("click", function () {
  document.querySelector("#interface").style.background =
    "linear-gradient(to right, #f3ecec, #eeeded)";
  calcShow.style.color = "#111";
  calSolution.style.color = "#111";
});
darkmode.addEventListener("click", function () {
  document.querySelector("#interface").style.background = "#111";
  calcShow.style.color = "#fff";
  calSolution.style.color = "#fff";
});

/////Inventing  Calculator

//Displaying Calculation on screen
allButtons.forEach((button, i) => {
  button.addEventListener("click", function () {
    if (calcShow.textContent === "0") calcShow.textContent = "";

    calcShow.textContent += allButtons[i].textContent; // calcShow.textContent + allButtons[i].textContent
  });
});

//Displaying Result
equalButton.addEventListener("click", function () {
  calSolution.textContent = Function("return " + calcShow.textContent)();
});

//Clear all calculation on the screen
clearAllButton.addEventListener("click", function () {
  calcShow.textContent = "0";
  calSolution.textContent = "0";
});

//Delete Last number
deleteButton.addEventListener("click", function () {
  const delLastNumber = calcShow.textContent.slice(0, -1);
  calcShow.textContent = delLastNumber;
});

////////Implementing date and time
setInterval(function () {
  const date = new Date();
  time.textContent = `${date.getHours()}: ${date.getMinutes()}: ${date.getSeconds()}`;
  let dayWord = date.getDay();
  let days = ["SUN", "MON", "TEU", "WED", "THU", "FRI", "SAT"];
  day.textContent = days[dayWord];
}, 10);

//2: 5
//2: 10
//10: 5
//12: 00

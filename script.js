let div_result = document.querySelector(".result");
const numberButtons = document.querySelectorAll(".numbs");
const plusButton = document.querySelector(".ops-1");
const minusButton = document.querySelector(".ops-2");
const multiplyButton = document.querySelector(".ops-3");
const devideButton = document.querySelector(".ops-4");

function add(numberOne, numberTwo) {
  return numberOne + numberTwo;
}

function substract(numberOne, numberTwo) {
  return numberOne - numberTwo;
}

function multiply(numberOne, numberTwo) {
  return numberOne * numberTwo;
}

function devide(numberOne, numberTwo) {
  return numberOne / numberTwo;
}

function operate(numberOne, numberTwo) {
  const operation = prompt("Which arithmetic operations you want").toString();
  numberOne = prompt("First number");
  numberTwo = prompt("Second number");
  numberOne = Number(numberOne);
  numberTwo = Number(numberTwo);
  if (operation == "+") return console.log(add(numberOne, numberTwo));
  if (operation == "-") return console.log(substract(numberOne, numberTwo));
  if (operation == "x" || operation == "*")
    return console.log(multiply(numberOne, numberTwo));
  return console.log(devide(numberOne, numberTwo));
}

let numberOne = "";

for (let i = 0; i < numberButtons.length; i++) {
  numberButtons[i].addEventListener("click", () => {
    div_result.innerText = numberOne.toString() + i.toString();
    numberOne = div_result.innerText.toString();
    return numberOne;
  });
}
plusButton.addEventListener("click", () => {
  div_result.innerText = numberOne + "+";
});

minusButton.addEventListener("click", () => {
  div_result.innerText = numberOne + "-";
});

multiplyButton.addEventListener("click", () => {
  div_result.innerText = numberOne + "*";
});

devideButton.addEventListener("click", () => {
  div_result.innerText = numberOne + "/";
});

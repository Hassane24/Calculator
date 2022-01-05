let div_result = document.querySelector(".result");
const numberButtons = document.querySelectorAll(".numbs");
const operators = document.querySelectorAll(".ops");
const clearButton = document.querySelector(".clear");

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
  numberOne = Number(numberOne);
  numberTwo = Number(numberTwo);
  if (operator == "+") return add(numberOne, numberTwo);
  if (operator == "-") return substract(numberOne, numberTwo);
  if (operator == "*") return multiply(numberOne, numberTwo);
  if (operator == "/") return devide(numberOne, numberTwo);
}

let numberOne = "";
let numberTwo = "";
let operator = "";

operators.forEach((ops) => {
  ops.addEventListener("click", (e) => {
    if (e.target.innerText == "+") {
      div_result.innerText += "+";
      operator = "+";
    }
    if (e.target.innerText == "-") {
      div_result.innerText += "-";
      operator = "-";
    }
    if (e.target.innerText == "*") {
      div_result.innerText += "*";
      operator = "*";
    }
    if (e.target.innerText == "/") {
      div_result.innerText += "/";
      operator = "/";
    }
    if (e.target.innerText == "=") {
      operate(numberOne, numberTwo);
      div_result.innerText = operate(numberOne, numberTwo);
    }
  });
});

numberButtons.forEach((numbs) => {
  numbs.addEventListener("click", (e) => {
    if (operator === "") {
      numberOne += e.target.innerText;
      div_result.innerText = numberOne.toString();
    } else {
      numberTwo += e.target.innerText;
      div_result.innerText =
        numberOne.toString() + operator + numberTwo.toString();
    }
  });
});

clearButton.addEventListener("click", (e) => {
  if (e.target.innerText === "clear") {
    div_result.innerText = "";
    numberOne = "";
    numberTwo = "";
    operator = "";
  }
});

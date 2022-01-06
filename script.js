let currentOperand = document.querySelector(".current-operand");
let previousOperand = document.querySelector(".previous-operand");
const numberButtons = document.querySelectorAll(".numbs");
const operators = document.querySelectorAll(".ops");
const clearButton = document.querySelector(".clear");
const delButton = document.querySelector(".DEL");
const decimalButton = document.querySelector(".decimal");

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
      currentOperand.innerText += "+";
      operator = "+";
      previousOperand.innerText = currentOperand.innerText;
      currentOperand.innerText = "";
      numberTwo = "";
    }

    if (e.target.innerText == "-") {
      currentOperand.innerText += "-";
      operator = "-";
      previousOperand.innerText = currentOperand.innerText;
      currentOperand.innerText = "";
      numberTwo = "";
    }

    if (e.target.innerText == "*") {
      currentOperand.innerText += "*";
      operator = "*";
      previousOperand.textContent = currentOperand.innerText;
      currentOperand.textContent = "";
      numberTwo = "";
    }

    if (e.target.innerText == "/") {
      currentOperand.innerText += "/";
      operator = "/";
      previousOperand.innerText = currentOperand.innerText;
      currentOperand.innerText = "";
      numberTwo = "";
    }

    if (e.target.innerText == "=") {
      numberOne = operate(numberOne, numberTwo);
      currentOperand.innerText = numberOne;
      previousOperand.innerText = "";
    }
  });
});

numberButtons.forEach((numbs) => {
  numbs.addEventListener("click", (e) => {
    if (operator === "") {
      numberOne += e.target.innerText;
      currentOperand.innerText = numberOne;
    } else {
      numberTwo += e.target.innerText;
      currentOperand.innerText = numberTwo;
    }
  });
});

clearButton.addEventListener("click", (e) => {
  if (e.target.innerText === "AC") {
    currentOperand.innerText = "";
    previousOperand.textContent = "";
    numberOne = "";
    numberTwo = "";
    operator = "";
  }
});

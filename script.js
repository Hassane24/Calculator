let currentOperand = document.querySelector(".current-operand");
let previousOperand = document.querySelector(".previous-operand");
let numberOne = "";
let numberTwo = "";
let currentOperator = "";
let reset_Screen = false;

const numberButtons = document.querySelectorAll(".numbs");
const operators = document.querySelectorAll(".ops");
const clearButton = document.querySelector(".clear");
const delButton = document.querySelector(".DEL");
const equalsButton = document.querySelector(".eq");
console.log(equalsButton);
const decimalButton = document.querySelector(".decimal");

function add(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function devide(a, b) {
  return a / b;
}

function operate(a, b) {
  a = Number(a);
  b = Number(b);
  if (currentOperator == "+") return add(a, b);
  if (currentOperator == "-") return substract(a, b);
  if (currentOperator == "*") return multiply(a, b);
  if (currentOperator == "/") return devide(a, b);
}

clearButton.addEventListener("click", allClear);
delButton.addEventListener("click", goBackInTime);
decimalButton.addEventListener("click", addPointToDisplay);
equalsButton.addEventListener("click", evaluate);

numberButtons.forEach((number) => {
  number.addEventListener("click", () =>
    addNumbersToDisplay(number.textContent)
  );
});

operators.forEach((ops) => {
  ops.addEventListener("click", () => addAndChooseOperation(ops.textContent));
});

function addNumbersToDisplay(number) {
  if (currentOperand.textContent === "0" || reset_Screen) resetScreen();
  currentOperand.textContent += number;
}

function addAndChooseOperation(operator) {
  if (currentOperator !== "") evaluate();
  numberOne = currentOperand.textContent;
  currentOperator = operator;
  previousOperand.textContent = numberOne + currentOperator;
  currentOperand.textContent = "";
  console.log("numberone=", numberOne);
  console.log(currentOperator);
}

function allClear() {
  currentOperand.textContent = "0";
  previousOperand.textContent = "";
  numberOne = "";
  numberTwo = "";
  currentOperator = "";
}

function goBackInTime() {
  currentOperand.textContent = currentOperand.textContent
    .toString()
    .slice(0, -1);
}

function addPointToDisplay() {
  if (reset_Screen) resetScreen();
  if (currentOperand.textContent == "") currentOperand.textContent = "0";
  if (currentOperand.textContent.includes(".")) return;
  currentOperand.textContent += ".";
}

function evaluate() {
  if (currentOperator === "" || reset_Screen) return;
  if (currentOperator === "/" && currentOperand.textContent === "0") {
    alert("ERROR!!");
    return;
  }
  numberTwo = currentOperand.textContent;
  currentOperand.textContent = rounded(operate(numberOne, numberTwo));
  previousOperand.textContent = numberOne + currentOperator + numberTwo + "=";
  currentOperator = "";
}

function rounded(number) {
  return Math.round(number * 1000) / 1000;
}

function resetScreen() {
  currentOperand.textContent = "";
  reset_Screen = false;
}

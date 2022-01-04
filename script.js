let div_result = document.querySelector(".result");
const numberButtons = document.querySelectorAll(".numbs");
console.log(numberButtons);
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
let storage = "";

for (let i = 0; i < numberButtons.length; i++) {
  numberButtons[i].addEventListener("click", () => {
    div_result.innerText = i.toString() + storage.toString();
    storage = div_result.innerText.toString();
  });
}

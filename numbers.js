let currentInput = '';
let operation = null;
let firstOperand = null;

function appendNumber(number) {
  currentInput += number;
  updateDisplay();
}

function setOperation(op) {
  if (currentInput === '') return;
  if (firstOperand === null) {
    firstOperand = parseFloat(currentInput);
  } else {
    calculate();
  }
  operation = op;
  currentInput = '';
}

function calculate() {
  if (operation === null || currentInput === '') return;
  const secondOperand = parseFloat(currentInput);
  switch (operation) {
    case '+':
      firstOperand += secondOperand;
      break;
    case '-':
      firstOperand -= secondOperand;
      break;
    case '*':
      firstOperand *= secondOperand;
      break;
    case '/':
      firstOperand /= secondOperand;
      break;
  }
  currentInput = firstOperand.toString();
  operation = null;
  updateDisplay();
}

function clearDisplay() {
  currentInput = '';
  operation = null;
  firstOperand = null;
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('display').value = currentInput;
}

let displayValue = '';
let operator = '';
let firstOperand = '';
let secondOperand = '';
function appendNumber(number) {
  displayValue += number;
  updateDisplay();
}

function appendDecimal() {
  if (!displayValue.includes('.')) {
    displayValue += '.';
    updateDisplay();
  }
}

function setOperator(op) {
    if (operator !== '') {
        calculate();
      }
  operator = op;
  displayValue+=op;
  updateDisplay();
  firstOperand = displayValue;
  displayValue = '';
}

function calculate() {
  if (operator === '' || displayValue === '') {
    return;
  }
  secondOperand = displayValue;
  let result;
  switch (operator) {
    case '+':
      result = parseFloat(firstOperand) + parseFloat(secondOperand);
      break;
    case '-':
      result = parseFloat(firstOperand) - parseFloat(secondOperand);
      break;
    case '*':
      result = parseFloat(firstOperand) * parseFloat(secondOperand);
      break;
    case '/':
      result = parseFloat(firstOperand) / parseFloat(secondOperand);
      break;
    default:
      return;
  }
  displayValue = result.toString();
  operator = '';
  firstOperand = '';
  secondOperand = '';
  updateDisplay();
}

function clearDisplay() {
  displayValue = '';
  operator = '';
  firstOperand = '';
  secondOperand = '';
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('display').value = displayValue;
}

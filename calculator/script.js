function calculate() {
  const firstNum = parseFloat(document.getElementById('num1').value);
  const secondNum = parseFloat(document.getElementById('num2').value);
  const operation = document.getElementById('operation').value;
  const resultElement = document.getElementById('result');

  if (isNaN(firstNum) || isNaN(secondNum)) {
    resultElement.textContent = 'Please enter valid numbers.';
    resultElement.classList.remove('alert-success');
    resultElement.classList.add('alert-danger');
    resultElement.classList.remove('alert-info');
    return;
  } //For non-numeric data validation

  let result;
  switch (operation) {
    case 'add':
      result = firstNum + secondNum;
      break;
    case 'subtract':
      result = firstNum - secondNum;
      break;
    case 'multiply':
      result = firstNum * secondNum;
      break;
    case 'divide':
      if (secondNum === 0) {
        resultElement.textContent = 'Mathmetical Error!! Divide by Zero (0) is not allowed';
        resultElement.classList.remove('alert-success');
        resultElement.classList.add('alert-danger');
        resultElement.classList.remove('alert-info');
        return;
      } // for Divide by Zero error
      result = firstNum / secondNum;
      break;
  }

  //Main Success Result Display
  resultElement.textContent = 'Result: ' + result;
  resultElement.classList.remove('alert-danger');
  resultElement.classList.add('alert-success');
  resultElement.classList.remove('alert-info');
}
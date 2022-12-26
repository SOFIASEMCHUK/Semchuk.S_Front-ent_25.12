//1
const arr = [5, 66, 'pool', 7, 99, null, { name: 'Sam' }, [], true, 78];
culc(arr);
function culc(arr) {
  let num = 0;
  for (let item of arr) {
    if (item >= 0 && item !== NaN && typeof item !== 'boolean') {
      num += Number(item);
    }
  }
  console.log(num);
}

const num1 = +prompt('Enter numner 1');
const num2 = +prompt('Enter number 2');
const operator = prompt('Enter operator: + - * /');

//2
doMath(num1, num2, operator);
function doMath(num1, num2, operator) {
  switch (operator) {
    case '+':
      console.log(`${num1} ${operator} ${num2} = ${num1 + num2}`);
      break;
    case '-':
      console.log(`${num1} ${operator} ${num2} = ${num1 - num2}`);
      break;
    case '*':
      console.log(`${num1} ${operator} ${num2} = ${num1 * num2}`);
      break;
    case '/':
      console.log(`${num1} ${operator} ${num2} = ${num1 / num2}`);
      break;
    default:
      break;
  }
}

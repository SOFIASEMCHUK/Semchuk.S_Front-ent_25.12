//1
const arr = [5, 66, 'pool', 7, 99, null, { name: 'Sam' }, [], true, 78];

function culc(arr) {
    let num = 0;
    for (let item of arr) {
        if (item !== Number.isNaN && typeof item === 'number') {
            num += item;
        }
    }
    console.log(num);
}

culc(arr);

//2
const num1 = +prompt('Enter number 1(task 2)');
const num2 = +prompt('Enter number 2(task 2)');
const operator = prompt('Enter operator: + - * / % ^(task 2)');

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
        case '%':
            console.log(`${num1} ${operator} ${num2} = ${num1 % num2}`);
            break;
        case '^':
            console.log(`${num1} ${operator} ${num2} = ${num1 ** num2}`);
            break;
        default:
            break;
    }
}
doMath(num1, num2, operator);

//3
const horizontal = +prompt('Введіть довжину зовнішнього масиву (task 3)');
const vertical = +prompt('Введіть довжину внутрішнього масиву (task 3)');
const arr2 = [];

function arrDouble(horizontal, vertical, arr2) {
    for (let m = 0; m < vertical; m++) {
        arr2[m] = [];
        for (let n = 0; n < horizontal; n++) {
            arr2[m][n] = prompt(`Enter ${n} element ${m} line`);
        }
    }
}

arrDouble(horizontal, vertical, arr2);
console.log(arr2);

//4
const line = prompt('Enter string (task 4)');
const remove = prompt('Enter the simvole(-s) you want to delete (task 4)');
let strocka = '';

function deleteSimvole(line, remove) {
    strocka = line;
    strocka = strocka.split('');
    for (let i = 0; i < strocka.length; i++) {
        for (let j = 0; j < remove.length; j++) {
            if (strocka[i] === remove[j]) {
                strocka[i] = '';
            }
        }
    }
    console.log(strocka.join(''));
}
deleteSimvole(line, remove);

//1
const arr = [5, 66, 'pool', 7, 99, null, { name: 'Sam' }, [], true, 78];

function culc(arr) {
    let num = 0;
    let count = 0;
    for (let item of arr) {
        if (item !== Number.isNaN(item) && typeof item === 'number') {
            num += item;
            count++;
        }
    }
    console.log(`${num} / ${count} = ${num / count}`);
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

function arrDouble(horizontal, vertical) {
    const arr2 = [];
    for (let m = 0; m < vertical; m++) {
        arr2[m] = [];
        for (let n = 0; n < horizontal; n++) {
            arr2[m][n] = prompt(`Enter ${n} element ${m} line`);
        }
    }
    console.log(arr2);
}

arrDouble(horizontal, vertical);

//4
const line = prompt('Enter string (task 4)');
const remove = prompt('Enter the simvole(-s) you want to delete (task 4)');

function deleteSimvole(line, remove) {
    const deleteWord = line.split('');
    for (let i = 0; i < deleteWord.length; i++) {
        for (let j = 0; j < remove.length; j++) {
            if (deleteWord[i] === remove[j]) {
                deleteWord[i] = '';
            }
        }
    }
    console.log(deleteWord.join(''));
}
deleteSimvole(line, remove);

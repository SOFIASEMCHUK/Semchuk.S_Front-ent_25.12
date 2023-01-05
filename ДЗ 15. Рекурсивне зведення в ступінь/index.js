const num = +prompt('Enter number');
const degree = +prompt('Enter degree');

function getNewNumber(num, degree) {
    if (degree === 0) {
        return 1;
    }
    return num * getNewNumber(num, degree - 1);
}
console.log(getNewNumber(num, degree));

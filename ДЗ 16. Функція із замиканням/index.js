function getParametr() {
    const count = +prompt('Enter count parametr');
    let sum = 0;
    let num = null;
    return function () {
        if (count !== Number.isNaN) {
            for (let i = 0; i < count; i++) {
                num = +prompt('Enter parametr');
                sum += num;
                console.log(`sum(${num}) = ${sum}`);
            }
        }
    }
}

const result = getParametr();
result();

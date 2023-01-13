function getParametr() {
    let sum = 0;
    const num = 0;
    return function (num) {
        sum += num;
        console.log(`sum(${num}) = ${sum}`);
    };
}

const result = getParametr();
result(1);
result(3);
result(6);
result(9);
result(1);

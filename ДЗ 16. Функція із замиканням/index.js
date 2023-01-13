function getParametr() {
    // const count = +prompt('Enter count parametr');
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

//  function getParametr() {
//     const count = +prompt('Enter count parametr');
//     let sum = 0;
//     let num = null;
//     return function () {
//         if (count !== Number.isNaN) {
//             for (let i = 0; i < count; i++) {
//                 num = +prompt('Enter parametr');
//                 sum += num;
//                 console.log(`sum(${num}) = ${sum}`);
//             }
//         }
//     }
// }

// const result = getParametr();
// result();

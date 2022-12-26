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

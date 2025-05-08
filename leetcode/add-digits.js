function addDigitsOptimized(num) {
  return num === 0 ? 0 : 1 + ((num - 1) % 9);
}

function addDigits(num) {
  while (num > 9) {
    num = [...num.toString()].reduce((acc, elem) => {
      return acc + Number(elem);
    }, 0);
  }
  return num;
}

console.log(addDigits(38));
console.log(addDigits(0));
console.log(addDigits(9));

function reverseWithSign(num) {
  const sign = num > 0 ? 1 : -1;
  const numberWithSign = sign * reverse(Math.abs(num));
  if (numberWithSign > Math.pow(2, 31) - 1 || numberWithSign < -Math.pow(2, 31))
    return 0;
  return numberWithSign;
}

function reverse(num) {
  let result = 0;

  while (num > 0) {
    let digit = num % 10;
    result = result * 10 + digit;
    num = Math.floor(num / 10);
  }
  return result;
}

console.log(reverseWithSign(123));
console.log(reverseWithSign(-456));

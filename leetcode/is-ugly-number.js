function isUgly(num) {
  if (num <= 0) return false;

  while (num % 2 === 0) {
    num /= 2;
  }
  while (num % 3 === 0) {
    num /= 3;
  }
  while (num % 5 === 0) {
    num /= 5;
  }

  return num === 1;
}

console.log(isUgly(6));
console.log(isUgly(8));
console.log(isUgly(14));
console.log(isUgly(1));

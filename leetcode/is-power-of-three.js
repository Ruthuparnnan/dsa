function isPowerOfThree(num) {
  while (num >= 2) {
    num /= 3;
  }

  return num === 1;
}

console.log(isPowerOfThree(27)); // true
console.log(isPowerOfThree(0)); // false

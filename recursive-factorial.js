function recursiveFactorial(num) {
  if (num < 2) {
    return 1;
  } else {
    return num * recursiveFactorial(num - 1);
  }
}
console.log(recursiveFactorial(5));

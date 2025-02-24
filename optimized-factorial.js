function factorial(num) {
  let output = 1;
  for (let i = 2; i <= num; i++) {
    output *= i;
  }
  return output;
}

console.log(factorial(3));

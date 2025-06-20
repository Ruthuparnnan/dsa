function subtractProductAndSum(n) {
  let product = 1;
  let sum = 0;

  while (n > 0) {
    product *= n % 10;
    sum += n % 10;
    n = Math.floor(n / 10);
  }

  return product - sum;
}

// Example usage
const n = 234;
const result = subtractProductAndSum(n);
console.log(result); // Output: 15

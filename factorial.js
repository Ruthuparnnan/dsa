function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1); // Function calls itself
}
// console.log(factorial(5)); // Output: 120

function custom(num) {
  let array = [];
  for (let i = num; i !== 1; i--) {
    array.push(i);
  }
  return array.reduce((acc, curr) => acc * curr);
}

// console.log(custom(5));

function custom2(num) {
  let result = 1;
  for (let i = 2; i <= num; num--) {
    result *= num;
  }
  return result;
}

console.log(custom2(5));

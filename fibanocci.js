function fibanocci(num) {
  let output = [0, 1];
  for (let i = 2; i < num; i++) {
    output.push(output[i - 2] + output[i - 1]);
  }
  return output;
}

// console.log(fibanocci(5));

const optmizedFibanocci = (num) => {
  let a = 0;
  let b = 1;
  let fib = [a, b];
  for (let i = 2; i < num; i++) {
    let next = a + b;
    fib.push(next);
    a = b;
    b = next;
  }
  return fib;
};
console.log(optmizedFibanocci(5))
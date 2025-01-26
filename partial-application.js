const multiply = (a, b, c) => {
  return a * b * c;
};

const multiplyByFive = multiply.bind(null, 5);

console.log(multiplyByFive(2, 10));

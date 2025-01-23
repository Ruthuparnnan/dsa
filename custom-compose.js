function multiplyByTwo(a) {
  return a * 2;
}

function addByFour(a) {
  return a + 4;
}

function substractByThree(a) {
  return a - 3;
}

const compose = (...functions) => {
  return (args) => {
    return functions.reduceRight((acc, elem) => elem(acc), args);
  };
};

const evaluate = compose(substractByThree, addByFour, multiplyByTwo);
console.log(evaluate(3));

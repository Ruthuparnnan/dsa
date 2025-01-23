const myMemoize = (fn, context) => {
  const res = {};
  return function (...args) {
    var argsCache = JSON.stringify(args);
    if (!res[argsCache]) {
      res[argsCache] = fn.call(context || this, ...args);
    }
    return res[argsCache];
  };
};

const expensiveFunction = (num1, num2) => {
  for (let i = 0; i <= 10000000; i++) {}
  return num1 * num2;
};

const memoizedFunction = myMemoize(expensiveFunction);

console.time("first call");
console.log(myMemoize(expensiveFunction)(4, 3));
console.timeEnd("first call");

console.time("second call");
console.log(memoizedFunction(14, 14));
console.timeEnd("second call");

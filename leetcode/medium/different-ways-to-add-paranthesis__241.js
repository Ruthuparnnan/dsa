/**
 * @param {string} expression
 * @return {number[]}
 */
var diffWaysToCompute = function (expression) {
  const memo = new Map();

  function compute(exp) {
    if (memo.has(exp)) return memo.get(exp);

    const result = [];

    for (let i = 0; i < exp.length; i++) {
      const ch = exp[i];

      if (ch === "+" || ch === "-" || ch === "*") {
        // Split into left and right expressions
        const left = compute(exp.slice(0, i));
        const right = compute(exp.slice(i + 1));

        // Combine every left result with every right
        for (let a of left) {
          for (let b of right) {
            if (ch === "+") result.push(a + b);
            if (ch === "-") result.push(a - b);
            if (ch === "*") result.push(a * b);
          }
        }
      }
    }

    // If no operator was found, exp is a number
    if (result.length === 0) result.push(Number(exp));

    memo.set(exp, result);
    return result;
  }

  return compute(expression);
};

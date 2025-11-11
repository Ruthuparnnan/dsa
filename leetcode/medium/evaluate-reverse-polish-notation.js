/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const stack = [];
  const map = new Set(["+", "-", "*", "/"]);

  for (let token of tokens) {
    if (map.has(token) && stack.length >= 2) {
      const b = stack.pop();
      const a = stack.pop();
      let res;

      if (token === "+") res = a + b;
      if (token === "-") res = a - b;
      if (token === "*") res = a * b;

      // JS `/` can give decimal; need to truncate toward 0 manually:
      if (token === "/") res = Math.trunc(a / b);

      stack.push(res);
    } else {
      stack.push(Number(token));
    }
  }

  return stack.pop();
};

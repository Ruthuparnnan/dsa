/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  const stack = [];
  let sign = "+";
  let num = 0;

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];

    if (ch >= "0" && ch <= "9") {
      num = num * 10 + (ch - "0");
    }

    if (((ch < "0" || ch > "9") && ch !== " ") || i === s.length - 1) {
      if (sign === "+") stack.push(num);
      if (sign === "-") stack.push(-num);
      if (sign === "*") stack.push(stack.pop() * num);
      if (sign === "/") stack.push(Math.trunc(stack.pop() / num));

      sign = ch;
      num = 0;
    }
  }

  return stack.reduce((a, b) => a + b, 0);
};

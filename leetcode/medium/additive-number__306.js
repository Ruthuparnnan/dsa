/**
 * @param {string} num
 * @return {boolean}
 */
var isAdditiveNumber = function (num) {
  const n = num.length;

  for (let i = 1; i <= Math.floor(n / 2); i++) {
    const a = num.slice(0, i);

    if (a.length > 1 && a[0] === "0") break;

    for (let j = i + 1; j < n; j++) {
      const b = num.slice(i, j);
      if (b.length > 1 && b[0] === "0") break;
      if (check(a, b, j)) return true;
    }
  }
  return false;

  function check(a, b, start) {
    while (start < n) {
      const sum = addStrings(a, b);
      if (!num.startsWith(sum, start)) return false;

      start += sum.length;
      a = b;
      b = sum;
    }
    return true;
  }
};

function addStrings(a, b) {
  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0;
  let res = "";

  while (i >= 0 || j >= 0 || carry) {
    let sum = carry;
    if (i >= 0) sum += a.charCodeAt(i--) - 48;
    if (j >= 0) sum += b.charCodeAt(j--) - 48;

    res = (sum % 10) + res;
    carry = Math.floor(sum / 10);
  }
  return res;
}

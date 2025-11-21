/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function (numerator, denominator) {
  if (numerator === 0) return "0";

  let res = "";

  if ((numerator < 0) ^ (denominator < 0)) res += "-";

  const num = Math.abs(numerator);
  const den = Math.abs(denominator);

  res += Math.floor(num / den);

  let reminder = num % den;

  if (reminder === 0) return res;

  res += ".";

  const map = new Map();

  while (reminder !== 0) {
    if (map[reminder] !== undefined) {
      const idx = map[reminder];
      res = res.slice(0, idx) + "(" + res.slice(idx) + ")";
      return res;
    }

    map[reminder] = res.length;
    reminder *= 10;
    res += Math.floor(reminder / den);
    reminder %= den;
  }

  return res;
};

/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function (s) {
  let flipStartWith0 = 0;
  let flipStartWith1 = 0;

  for (let i = 0; i < s.length; i++) {
    const expected0 = i % 2 === 0 ? "0" : "1";
    const expected1 = i % 2 === 0 ? "1" : "0";

    if (s[i] !== expected0) flipStartWith0++;
    if (s[i] !== expected1) flipStartWith1++;
  }

  return Math.min(flipStartWith0, flipStartWith1);
};

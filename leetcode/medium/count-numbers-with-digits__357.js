/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function (n) {
  if (n === 0) return 1;

  let result = 10;
  let unique = 9;
  let available = 9;

  for (let i = 2; i <= n; i++) {
    unique *= available;
    result += unique;
    available--;
  }

  return result;
};

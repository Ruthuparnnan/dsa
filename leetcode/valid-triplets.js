/**
 * @param {number} n
 * @return {number}
 */
var countTriples = function (n) {
  let count = 0;

  for (let a = 1; a <= n; a++) {
    for (let b = 1; b <= n; b++) {
      let cSquare = a * a + b * b;
      let c = Math.floor(Math.sqrt(cSquare));
      if (c * c === cSquare && c <= n) count++;
    }
  }

  return count;
};

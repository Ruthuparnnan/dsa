/**
 * @param {number[]} colors
 * @return {number}
 */
var maxDistance = function (colors) {
  let max = -Infinity;
  let i = 0;
  let j = colors.length - 1;
  let m = 0;
  let n = colors.length - 1;

  while (i < j) {
    if (colors[i] !== colors[j]) {
      max = Math.max(j - i, max);
    }
    if (colors[m] !== colors[n]) {
      max = Math.max(n - m, max);
    }
    j--;
    m++;
  }
  return max;
};

/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function (original, m, n) {
  if (m * n !== original.length) return [];
  const result = [];

  for (let i = 0; i < original.length; i += n) {
    const slice = original.slice(i, i + n);
    result.push(slice);
  }

  return result;
};

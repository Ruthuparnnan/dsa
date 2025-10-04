/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const result = [];
  function backtrack(array, start) {
    if (array.length === k) {
      result.push([...array]);
      return;
    }

    for (let i = start; i <= n; i++) {
      array.push(i);
      backtrack(array, i + 1);
      array.pop();
    }
  }

  backtrack([], 1);

  return result;
};

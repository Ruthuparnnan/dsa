/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
  const n = matrix.length;
  let low = matrix[0][0];
  let high = matrix[n - 1][n - 1];

  function getCount(mid) {
    let count = 0;
    let col = n - 1;

    for (let row = 0; row < n; row++) {
      while (col >= 0 && matrix[row][col] > mid) {
        col--;
      }
      count += col + 1;
    }

    return count;
  }

  while (low < high) {
    const mid = Math.floor((low + high) / 2);

    if (getCount(mid) >= k) {
      high = mid;
    } else {
      low = mid + 1;
    }
  }
  return low;
};

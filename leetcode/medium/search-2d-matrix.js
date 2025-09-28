/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  const m = matrix.length;
  const n = matrix[0].length;

  if (target > matrix[m - 1][n - 1]) return false;

  let row;

  for (let i = 0; i < m; i++) {
    if (matrix[i][n - 1] >= target) {
      row = i;
      break;
    }
  }

  let start = 0;
  let end = n - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (matrix[row][mid] === target) return true;

    if (matrix[row][mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return false;
};

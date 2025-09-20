/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  let num = 1;
  let top = 0;
  let down = n - 1;
  let left = 0;
  let right = n - 1;
  const matrix = Array.from({ length: n }, () => Array(n).fill(0));

  while (top <= down && left <= right) {
    for (let i = left; i <= right; i++) {
      matrix[top][i] = num;
      num++;
    }
    top++;

    for (let i = top; i <= down; i++) {
      matrix[i][right] = num;
      num++;
    }
    right--;

    if (top <= down) {
      for (let i = right; i >= left; i--) {
        matrix[down][i] = num;
        num++;
      }
      down--;
    }

    if (left <= right) {
      for (let i = down; i >= top; i--) {
        matrix[i][left] = num;
        num++;
      }
      left++;
    }
  }

  return matrix;
};

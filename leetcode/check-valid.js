/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var checkValid = function (matrix) {
  for (let i = 0; i < matrix.length; i++) {
    const rowSet = new Set();
    const colSet = new Set();

    for (let j = 0; j < matrix.length; j++) {
      rowSet.add(matrix[i][j]);
      colSet.add(matrix[j][i]);
    }

    if (rowSet.size !== matrix.length) return false;
    if (colSet.size !== matrix.length) return false;
  }

  return true;
};

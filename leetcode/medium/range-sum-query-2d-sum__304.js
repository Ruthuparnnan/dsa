/**
 * @param {number[][]} matrix
 */
var NumMatrix = function (matrix) {
  const m = matrix.length;
  const n = matrix[0].length;

  this.pre = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      this.pre[i][j] =
        matrix[i - 1][j - 1] +
        this.pre[i - 1][j] +
        this.pre[i][j - 1] -
        this.pre[i - 1][j - 1];
    }
  }
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
  return (
    this.pre[row2 + 1][col2 + 1] -
    this.pre[row1][col2 + 1] -
    this.pre[row2 + 1][col1] +
    this.pre[row1][col1]
  );
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */

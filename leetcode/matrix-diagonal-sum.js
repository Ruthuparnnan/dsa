function matrixDiagonalSum(mat) {
     let sum = 0;
  let n = mat.length - 1;
  for (let i = 0; i < mat.length; i++) {
    sum += mat[i][i];
    if(i!==n)sum += mat[i][n];
    n--
  }

  return sum;
}

console.log(
  matrixDiagonalSum([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
); // Output: 15

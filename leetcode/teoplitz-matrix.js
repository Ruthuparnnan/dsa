function isTeoplitzMatrix(matrix) {
  const rowLength = matrix.length - 1;
  const colLength = matrix[0].length - 1;

  for (let i = 0; i < rowLength; i++) {
    for (let j = 0; j < colLength; j++) {
      if (matrix[i][j] !== matrix[i + 1][j + 1]) {
        return false;
      }
    }
  }
  return true;
}

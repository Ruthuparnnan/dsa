function transpose(matrix) {
  const result = [];

  for (let i = 0; i < matrix[0].length; i++) {
    const row = [];
    for (let j = 0; j < matrix.length; j++) {
      row.push(matrix[j][i]);
    }
    result.push(row);
  }

  return result;
}

// Test cases
console.log(
  transpose([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
); // Output: [[1, 4, 7], [2, 5, 8], [3, 6, 9]]

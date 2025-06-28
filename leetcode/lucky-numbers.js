function luckyNumbers(matrix) {
  const result = [];
  for (let i = 0; i < matrix.length; i++) {
    let smallestIndex = Infinity;
    let smallestElement = Infinity;
    let isElementFound = true;
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] < smallestElement) {
        smallestElement = matrix[i][j];
        smallestIndex = j;
      }
    }
    for (let k = 0; k < matrix.length; k++) {
      if (matrix[k][smallestIndex] > smallestElement) {
        isElementFound = false;
        break;
      }
    }
    if (isElementFound) result.push(smallestElement);
  }

  return result;
}

console.log(
  luckyNumbers([
    [1, 10, 4, 2],
    [9, 3, 8, 7],
    [15, 16, 17, 12],
  ])
);

function allCellsDistOrder(rows, cols, rCenter, cCenter) {
  const result = [];

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const distance = Math.abs(i - rCenter) + Math.abs(j - cCenter);
      result.push([i, j, distance]);
    }
  }

  result.sort((a, b) => a[2] - b[2]);
  return result.map((cell) => [cell[0], cell[1]]);
}

var allCellsDistOrder = function (rows, cols, rCenter, cCenter) {
  const result = [];

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      result.push([i, j]);
    }
  }

  result.sort((a, b) => {
    const distA = Math.abs(a[0] - rCenter) + Math.abs(a[1] - cCenter);
    const distB = Math.abs(b[0] - rCenter) + Math.abs(b[1] - cCenter);
    return distA - distB;
  });

  return result;
};

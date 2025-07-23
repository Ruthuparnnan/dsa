function specialNum() {
  let specialCount = 0;
  const rowCount = new Array(mat.length).fill(0);
  const colCount = new Array(mat[0].length).fill(0);

  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      if (mat[i][j] === 1) {
        rowCount[i]++;
        colCount[j]++;
      }
    }
  }

  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      if (mat[i][j] === 1 && rowCount[i] < 2 && colCount[j] < 2) specialCount++;
    }
  }

  return specialCount;
}

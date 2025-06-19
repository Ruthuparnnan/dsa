function oddCells(n, m, indices) {
  const rowCount = Array(n).fill(0);
  const colCount = Array(m).fill(0);

  for (const [r, c] of indices) {
    rowCount[r]++;
    colCount[c]++;
  }

  let oddCount = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if ((rowCount[i] + colCount[j]) % 2 !== 0) {
        oddCount++;
      }
    }
  }

  return oddCount;
}

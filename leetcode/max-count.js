function maxCount(m, n, ops) {
  let minRow = m;
  let minCol = n;

  for (let [a, b] of ops) {
    minRow = Math.min(minRow, a);
    minCol = Math.min(minCol, b);
  }

  return minCol * minRow;
}

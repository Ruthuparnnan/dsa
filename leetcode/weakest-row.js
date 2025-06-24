function weakestRows(mat, k) {
  const rankMap = new Map();

  for (let i = 0; i < mat.length; i++) {
    let count = 0;
    for (let j = 0; j < mat[i].length; j++) {
      if (mat[i][j] === 1) count++;
    }
    rankMap.set(i, count);
  }

  const result = Array.from(rankMap)
    .sort((a, b) => a[1] - b[1])
    .map((item) => item[0]);

  return result.slice(0, k);
}

// Test cases
const mat1 = [
  [1, 1, 0, 0, 0],
  [1, 1, 1, 1, 0],
  [1, 0, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [1, 1, 1, 1, 1],
];
const k1 = 3;
console.log(weakestRows(mat1, k1)); // Output: [0, 2]

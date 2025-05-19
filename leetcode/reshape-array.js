function reshapeArray(mat, r, c) {
  const m = mat.length;
  const n = mat[0].length;

  if (m * n !== r * c) return mat;
  const flattenedArray = mat.flat(1);

  let result = [];
  for (let i = 0; i < r; i++) {
    let row = flattenedArray.slice(i * c, (i + 1) * c);
    result.push(row);
  }

  return result;
}

// Test cases
console.log(
  reshapeArray(
    [
      [1, 2],
      [3, 4],
    ],
    1,
    4
  )
);
console.log(
  reshapeArray(
    [
      [1, 2],
      [3, 4],
    ],
    2,
    4
  )
);

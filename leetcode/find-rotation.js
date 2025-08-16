var findRotation = function (mat, target) {
  const n = mat.length;

  const isEqual = (a, b) => {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (a[i][j] !== b[i][j]) return false;
      }
    }
    return true;
  };

  const rotate = (matrix) => {
    let newMat = Array.from({ length: n }, () => Array(n).fill(0));
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        newMat[j][n - 1 - i] = matrix[i][j];
      }
    }
    return newMat;
  };

  for (let k = 0; k < 4; k++) {
    if (isEqual(mat, target)) return true;
    mat = rotate(mat);
  }
  return false;
};

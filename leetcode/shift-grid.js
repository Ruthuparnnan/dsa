function shiftGrid(grid, k) {
  const m = grid.length;
  const n = grid[0].length;
  const total = m * n;
  const flat = grid.flat(1);

  const shifted = new Array(total);

  for (let i = 0; i < total; i++) {
    shifted[(i + k) % total] = flat[i];
  }

  const result = [];

  for (let i = 0; i < total; i += n) {
    result.push(shifted.slice(i, i + n));
  }

  return result;
}

// example usage
const grid = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const k = 1;
const shifted = shiftGrid(grid, k);
console.log(shifted);

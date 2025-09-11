/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const rows = new Array(9).fill(0).map(() => new Set());
  const cols = new Array(9).fill(0).map(() => new Set());

  const boxes = new Map();

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const cell = board[i][j];
      if (cell === ".") continue;
      const boxKey = `${Math.floor(i / 3)}-${Math.floor(j / 3)}`;

      if (rows[i].has(cell)) return false;
      rows[i].add(cell);

      if (cols[j].has(cell)) return false;
      cols[j].add(cell);

      if (!boxes.has(boxKey)) boxes.set(boxKey, new Set());
      if (boxes.get(boxKey).has(cell)) return false;
      boxes.get(boxKey).add(cell);
    }
  }

  return true;
};

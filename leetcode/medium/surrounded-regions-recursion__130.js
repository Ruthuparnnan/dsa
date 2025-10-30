/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  if (!board || !board.length) return;

  const cols = board[0].length;
  const rows = board.length;

  function dfs(r, c) {
    if (r < 0 || c < 0 || r >= rows || c >= cols || board[r][c] !== "O") return;
    board[r][c] = "s";
    dfs(r, c - 1);
    dfs(r - 1, c);
    dfs(r + 1, c);
    dfs(r, c + 1);
  }

  for (let i = 0; i < rows; i++) {
    dfs(i, 0);
    dfs(i, cols - 1);
  }

  for (let i = 0; i < rows; i++) {
    dfs(0, i);
    dfs(rows - 1, i);
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (board[i][j] === "O") board[i][j] = "X";
      else if (board[i][j] === "s") board[i][j] = "O";
    }
  }
};

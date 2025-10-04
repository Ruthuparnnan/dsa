var exist = function (board, word) {
  const rows = board.length;
  const cols = board[0].length;

  function dfs(r, c, i) {
    // If all characters are found
    if (i === word.length) return true;

    // Out of bounds or mismatch
    if (r < 0 || c < 0 || r >= rows || c >= cols || board[r][c] !== word[i]) {
      return false;
    }

    // Mark cell as visited
    const temp = board[r][c];
    board[r][c] = "#";

    // Explore 4 directions
    const found =
      dfs(r + 1, c, i + 1) ||
      dfs(r - 1, c, i + 1) ||
      dfs(r, c + 1, i + 1) ||
      dfs(r, c - 1, i + 1);

    // Backtrack (restore value)
    board[r][c] = temp;

    return found;
  }

  // Try starting DFS from each cell
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (dfs(r, c, 0)) return true;
    }
  }

  return false;
};

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
  const rows = board.length;
  const cols = board[0].length;

  // Directions for the 8 neighbors
  const neighbors = [
    [1, 0],
    [1, -1],
    [1, 1],
    [0, 1],
    [0, -1],
    [-1, 0],
    [-1, -1],
    [-1, 1],
  ];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      let liveNeighbors = 0;

      // Count live neighbors
      for (const [dr, dc] of neighbors) {
        let nr = r + dr;
        let nc = c + dc;

        // Check boundaries and check if neighbor was originally alive
        // (States 1 and 2 represent cells that were alive)
        if (
          nr >= 0 &&
          nr < rows &&
          nc >= 0 &&
          nc < cols &&
          (board[nr][nc] === 1 || board[nr][nc] === 2)
        ) {
          liveNeighbors++;
        }
      }

      // Apply Rules
      if (board[r][c] === 1) {
        // Rule 1 & 3: Live cell dies
        if (liveNeighbors < 2 || liveNeighbors > 3) {
          board[r][c] = 2;
        }
      } else {
        // Rule 4: Dead cell becomes alive
        if (liveNeighbors === 3) {
          board[r][c] = 3;
        }
      }
    }
  }

  // Final pass: Update board to final 0s and 1s
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (board[r][c] === 2) board[r][c] = 0;
      if (board[r][c] === 3) board[r][c] = 1;
    }
  }
};

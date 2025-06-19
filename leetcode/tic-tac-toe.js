function ticTacToe(moves) {
  const board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

  // Fill the board with moves
  for (let i = 0; i < moves.length; i++) {
    const [row, col] = moves[i];
    board[row][col] = i % 2 === 0 ? "X" : "O";
  }

  // Helper to check if a player wins
  const checkWinner = (player) => {
    // Rows and columns
    for (let i = 0; i < 3; i++) {
      if (
        (board[i][0] === player &&
          board[i][1] === player &&
          board[i][2] === player) ||
        (board[0][i] === player &&
          board[1][i] === player &&
          board[2][i] === player)
      ) {
        return true;
      }
    }
    // Diagonals
    if (
      (board[0][0] === player &&
        board[1][1] === player &&
        board[2][2] === player) ||
      (board[0][2] === player &&
        board[1][1] === player &&
        board[2][0] === player)
    ) {
      return true;
    }
    return false;
  };

  if (checkWinner("X")) return "A";
  if (checkWinner("O")) return "B";
  if (moves.length === 9) return "Draw";
  return "Pending";
}

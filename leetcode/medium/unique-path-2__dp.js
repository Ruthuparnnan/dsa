var uniquePathsWithObstacles = function (obstacleGrid) {
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;

  // initialize dp with 0s
  const dp = Array.from({ length: m }, () => Array(n).fill(0));

  // starting point
  dp[0][0] = obstacleGrid[0][0] === 0 ? 1 : 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (obstacleGrid[i][j] === 1) {
        dp[i][j] = 0; // obstacle
      } else if (!(i === 0 && j === 0)) {
        const fromTop = i > 0 ? dp[i - 1][j] : 0;
        const fromLeft = j > 0 ? dp[i][j - 1] : 0;
        dp[i][j] = fromTop + fromLeft;
      }
    }
  }

  return dp[m - 1][n - 1];
};

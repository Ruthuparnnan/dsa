function minCostClimbingStairs(cost) {
  const n = cost.length;
  const dp = new Array(n);

  dp[0] = cost[0];
  dp[1] = cost[1];

  for (let i = 2; i < n; i++) {
    dp[i] = cost[i] + Math.min(dp[i - 1], dp[i - 2]);
  }

  // You can step off from either of the last two steps
  return Math.min(dp[n - 1], dp[n - 2]);
}

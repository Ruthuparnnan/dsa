var numDecodings = function (s) {
  if (!s || s[0] === "0") return 0;

  const n = s.length;
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    const one = s.slice(i - 1, i);
    const two = s.slice(i - 2, i);

    if (one !== "0") dp[i] += dp[i - 1];
    if (two >= "10" && two <= "26") dp[i] += dp[i - 2];
  }

  return dp[n];
};

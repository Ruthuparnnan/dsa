/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
  const n1 = s1.length;
  const n2 = s2.length;
  const n3 = s3.length;

  // Preliminary check: if the total length of s1 and s2 does not match s3,
  // it's impossible for s3 to be an interleaving.
  if (n1 + n2 !== n3) {
    return false;
  }

  // Create a 2D DP table.
  // dp[i][j] will be true if s1[0...i-1] and s2[0...j-1] can interleave
  // to form s3[0...i+j-1].
  const dp = Array(n1 + 1)
    .fill(null)
    .map(() => Array(n2 + 1).fill(false));

  // Base case:
  // Empty s1 and empty s2 can interleave to form an empty s3.
  dp[0][0] = true;

  // Fill the first row (s1 is empty, only s2 contributes)
  // dp[0][j] means s1 (empty) and s2[0...j-1] form s3[0...j-1]
  for (let j = 1; j <= n2; j++) {
    if (dp[0][j - 1] && s2[j - 1] === s3[j - 1]) {
      dp[0][j] = true;
    }
  }

  // Fill the first column (s2 is empty, only s1 contributes)
  // dp[i][0] means s1[0...i-1] and s2 (empty) form s3[0...i-1]
  for (let i = 1; i <= n1; i++) {
    if (dp[i - 1][0] && s1[i - 1] === s3[i - 1]) {
      dp[i][0] = true;
    }
  }

  // Fill the rest of the DP table
  // For dp[i][j], the s3 character being matched is s3[i+j-1]
  for (let i = 1; i <= n1; i++) {
    for (let j = 1; j <= n2; j++) {
      // Possibility 1: s3[i+j-1] comes from s1[i-1]
      // This requires dp[i-1][j] to be true and s1[i-1] to match s3[i+j-1]
      const fromS1 = dp[i - 1][j] && s1[i - 1] === s3[i + j - 1];

      // Possibility 2: s3[i+j-1] comes from s2[j-1]
      // This requires dp[i][j-1] to be true and s2[j-1] to match s3[i+j-1]
      const fromS2 = dp[i][j - 1] && s2[j - 1] === s3[i + j - 1];

      // If either possibility is true, then dp[i][j] is true
      dp[i][j] = fromS1 || fromS2;
    }
  }

  // The final answer is whether s1 (all n1 chars) and s2 (all n2 chars)
  // can interleave to form s3 (all n3 chars).
  return dp[n1][n2];
};

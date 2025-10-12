/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  const dp = new Array(n + 1).fill(0);

  // Base cases:
  // There is 1 way to form a BST with 0 nodes (an empty tree).
  dp[0] = 1;
  // There is 1 way to form a BST with 1 node.
  dp[1] = 1;

  // Fill the dp table from 2 up to n.
  // i represents the current number of nodes.
  for (let i = 2; i <= n; i++) {
    // j represents the number of nodes in the left subtree.
    // If there are 'i' nodes in total, and 'j' nodes are in the left subtree,
    // then 'i - 1 - j' nodes must be in the right subtree (1 node for the root itself).
    for (let j = 0; j < i; j++) {
      dp[i] += dp[j] * dp[i - 1 - j];
    }
  }

  // The result for 'n' nodes is stored in dp[n].
  return dp[n];
};

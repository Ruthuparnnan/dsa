/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var rob = function (root) {
  function dfs(node) {
    if (!node) return [0, 0];

    const [lRob, lNot] = dfs(node.left);
    const [rRob, rNot] = dfs(node.right);

    const rob = node.val + lNot + rNot;
    const notRob = Math.max(lRob, lNot) + Math.max(rRob, rNot);

    return [rob, notRob];
  }

  const [rob, notRob] = dfs(root);

  return Math.max(rob, notRob);
};

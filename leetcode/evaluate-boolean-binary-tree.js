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
 * @return {boolean}
 */
var evaluateTree = function (root) {
  function dfs(node) {
    if (!node.left) return node.val;
    const left = dfs(node.left);
    const right = dfs(node.right);

    return node.val === 2
      ? Boolean(left) || Boolean(right)
      : Boolean(left) && Boolean(right);
  }

  return dfs(root);
};

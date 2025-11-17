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
var isValidBST = function (root) {
  // Helper function: checks if node is within [min, max]
  const validate = (node, min, max) => {
    if (!node) return true; // Empty subtree is valid

    // Current node must be within valid range
    if (node.val <= min || node.val >= max) {
      return false;
    }

    // Recursively validate left subtree (new max = current node's value)
    // and right subtree (new min = current node's value)
    return (
      validate(node.left, min, node.val) && validate(node.right, node.val, max)
    );
  };

  // Start with root, valid range: (-Infinity, +Infinity)
  return validate(root, -Infinity, Infinity);
};

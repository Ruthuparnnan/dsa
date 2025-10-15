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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {
  let first = null;
  let second = null;
  let prev = null;

  // In-order traversal to find swapped nodes
  const inOrder = (node) => {
    if (!node) return;

    inOrder(node.left);

    // Check if current node violates BST property
    if (prev && prev.val > node.val) {
      if (!first) {
        first = prev;
        second = node;
      } else {
        second = node;
      }
    }

    prev = node;
    inOrder(node.right);
  };

  inOrder(root);

  // Swap the values of the two misplaced nodes
  [first.val, second.val] = [second.val, first.val];
};

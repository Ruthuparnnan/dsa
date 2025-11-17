/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
class Solution {
  buildTree(inorder, postorder) {
    // Map inorder values to their indices for O(1) lookups
    const inMap = new Map();
    for (let i = 0; i < inorder.length; i++) {
      inMap.set(inorder[i], i);
    }

    // Recursive helper function
    const build = (inStart, inEnd, postStart, postEnd) => {
      if (inStart > inEnd) return null;

      // Root is the last element in the current postorder segment
      const rootVal = postorder[postEnd];
      const root = new TreeNode(rootVal);

      // Find root in inorder
      const inRoot = inMap.get(rootVal);

      // Size of left subtree
      const leftSize = inRoot - inStart;

      // Left subtree: [inStart, inRoot-1] in inorder
      // Postorder: [postStart, postStart + leftSize - 1]
      root.left = build(
        inStart,
        inRoot - 1,
        postStart,
        postStart + leftSize - 1
      );

      // Right subtree: [inRoot+1, inEnd] in inorder
      // Postorder: [postStart + leftSize, postEnd - 1] (root is at postEnd)
      root.right = build(inRoot + 1, inEnd, postStart + leftSize, postEnd - 1);

      return root;
    };

    return build(0, inorder.length - 1, 0, postorder.length - 1);
  }
}

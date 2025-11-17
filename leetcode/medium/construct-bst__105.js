/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
class Solution {
  buildTree(preorder, inorder) {
    // Map inorder values to their indices for O(1) lookups
    const inMap = new Map();
    for (let i = 0; i < inorder.length; i++) {
      inMap.set(inorder[i], i);
    }

    // Recursive helper function
    const build = (preStart, inStart, inEnd) => {
      if (inStart > inEnd) return null;

      // Current root from preorder
      const rootVal = preorder[preStart];
      const root = new TreeNode(rootVal);

      // Find root in inorder (using map)
      const inRoot = inMap.get(rootVal);

      // Size of left subtree = inRoot - inStart
      const leftSize = inRoot - inStart;

      // Recursively build left and right subtrees
      root.left = build(preStart + 1, inStart, inRoot - 1);
      root.right = build(preStart + 1 + leftSize, inRoot + 1, inEnd);

      return root;
    };

    return build(0, 0, inorder.length - 1);
  }
}

// Example Input:

// preorder = [3, 9, 20, 15, 7]
// inorder = [9, 3, 15, 20, 7]
// Step-by-Step Breakdown:

// 1. Initial Call:
// preStart = 0 (root is preorder[0] = 3)
// inStart = 0, inEnd = 4 (entire inorder array)
// 2. Find Root in Inorder:
// inRoot = 1 (because inorder[1] = 3)
// leftSize = inRoot - inStart = 1 - 0 = 1
// (This is the number of nodes in the left subtree)
// 3. Left Subtree Call:
// root.left = build(preStart + 1, inStart, inRoot - 1)
//            = build(0 + 1, 0, 1 - 1)
//            = build(1, 0, 0)
// Apply Code
// Why preStart + 1?
// Preorder starts with root (3), so left subtree starts at index 1 in preorder.
// Why inStart to inRoot - 1?
// Inorder: [9, 3, 15, 20, 7] → Left subtree is [9] (before 3), so inStart=0 to inRoot-1=0.
// Result: Left subtree = [9] (root 9)

// 4. Right Subtree Call:
// root.right = build(preStart + 1 + leftSize, inRoot + 1, inEnd)
//            = build(0 + 1 + 1, 1 + 1, 4)
//            = build(2, 2, 4)
// Apply Code
// Why preStart + 1 + leftSize?
// Preorder: [3, 9, 20, 15, 7]
// Root: 3 (index 0)
// Left subtree: 9 (1 node, so occupies index 1)
// Right subtree starts at index 2 (after root + left subtree size)
// Why inRoot + 1 to inEnd?
// Inorder: [9, 3, 15, 20, 7] → Right subtree is [15, 20, 7] (after 3), so inRoot+1=2 to inEnd=4.
// Result: Right subtree = [20, 15, 7] (root 20)

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
// The TreeNode definition is usually provided by the LeetCode environment.
// For local testing, you might need to define it:
// function TreeNode(val, left, right) {
//     this.val = (val === undefined ? 0 : val);
//     this.left = (left === undefined ? null : left);
//     this.right = (right === undefined ? null : right);
// }

var generateTrees = function (n) {
  if (n === 0) {
    // Handle the edge case for n=0
    return [];
  }

  function generate(start, end) {
    // Base case 1: If start > end, it means there are no numbers to form a tree.
    // Return a list containing null, representing an empty subtree.
    if (start > end) {
      return [null];
    }

    // Base case 2: If start === end, there's only one number.
    // Form a single node tree with this number.
    if (start === end) {
      return [new TreeNode(start)];
    }

    const allTrees = [];

    // Iterate through each number 'i' from start to end, making 'i' the root.
    // FIX: Use 'let' for the loop variable 'i' to ensure block scope.
    for (let i = start; i <= end; i++) {
      // Recursively generate all unique left subtrees using numbers from 'start' to 'i-1'.
      const leftSubtrees = generate(start, i - 1);
      // Recursively generate all unique right subtrees using numbers from 'i+1' to 'end'.
      const rightSubtrees = generate(i + 1, end);

      // Combine each left subtree with each right subtree, with 'i' as the root.
      for (const left of leftSubtrees) {
        for (const right of rightSubtrees) {
          const root = new TreeNode(i);
          root.left = left;
          root.right = right;
          allTrees.push(root);
        }
      }
    }
    return allTrees;
  }

  return generate(1, n);
};

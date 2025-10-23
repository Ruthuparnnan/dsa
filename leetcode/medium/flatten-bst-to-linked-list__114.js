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
var flatten = function (root) {
  let prev = null;

  function helper(node) {
    if (!node) return null;

    helper(node.right);
    helper(node.left);

    node.right = prev;
    node.left = null;
    prev = node;
  }

  helper(root);
};


// Let’s walk through step by step with a very simple example so you can see why setting root.right = prev works even when prev is initially null.

// 🪴 Example Tree:
//     1
//    / \
//   2   5


// We’ll flatten this tree in-place using reverse preorder traversal (Right → Left → Root).

// 🧩 Step 0 – Initial setup:
// prev = null
// helper(1)


// We call the helper function starting at the root (1).

// 🪜 Step 1 – At node 1

// We go right first, so:

// helper(1.right) → helper(5)

// 🪜 Step 2 – At node 5

// Recurse right: helper(5.right) → null → returns

// Recurse left: helper(5.left) → null → returns

// Now we’re back at node 5 (both children processed).

// 👉 Do the flatten logic:

// node.right = prev   // prev is null
// node.left = null
// prev = node         // prev = 5


// ✅ So:

// 5.right = null

// 5.left = null

// prev now points to node 5

// 🪜 Step 3 – Back to node 1 (continuing)

// We’ve finished helper(1.right).
// Now we go left:

// helper(1.left) → helper(2)

// 🪜 Step 4 – At node 2

// Right child: helper(2.right) → null

// Left child: helper(2.left) → null
// Both null, so process node 2:

// node.right = prev   // prev = 5
// node.left = null
// prev = node         // prev = 2


// ✅ Now:

// 2.right = 5

// 2.left = null

// prev = 2

// 🪜 Step 5 – Back to node 1 again

// Now both right (5) and left (2) are processed, so process 1:

// node.right = prev   // prev = 2
// node.left = null
// prev = node         // prev = 1


// ✅ So:

// 1.right = 2

// 1.left = null

// prev = 1

// 🎯 Final flattened structure:
// 1 → 2 → 5


// That’s exactly a preorder traversal flattened into a linked list.
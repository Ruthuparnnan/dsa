function sortedListToBST(head) {
  if (!head) return null;
  if (!head.next) return new TreeNode(head.val);

  // Find the middle node using slow/fast pointers
  let slow = head;
  let fast = head;
  let prev = null;

  while (fast && fast.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }

  // Split the list into two halves
  prev.next = null;

  // The middle node becomes the root
  const root = new TreeNode(slow.val);

  // Recursively build left and right subtrees
  root.left = this.sortedListToBST(head);
  root.right = this.sortedListToBST(slow.next);

  return root;
}

// Here's a detailed explanation of the key lines and the full code execution with a small example:

// 🔑 Why root.left = this.sortedListToBST(head) and root.right = this.sortedListToBST(slow.next)?
// After splitting the list:

// prev.next = null → This breaks the original list into two parts:
// Left half: From head to prev (inclusive)
// Right half: From slow.next to the end
// Why these calls?:

// root.left = sortedListToBST(head): The left subtree should be built from the left half of the list (starting at head).
// root.right = sortedListToBST(slow.next): The right subtree should be built from the right half of the list (starting at slow.next).
// 🌰 Full Example Walkthrough: [-10, -3, 0, 5, 9]
// Initial State
// head points to -10 → [-10, -3, 0, 5, 9]
// Step 1: Find Middle Node
// slow = -10, fast = -10, prev = null
// // First iteration
// prev = -10, slow = -3, fast = 0
// // Second iteration
// prev = -3, slow = 0, fast = 9
// // Third iteration: fast.next is null → exit loop
// Apply Code
// slow = 0 (middle node)
// prev = -3 (node before middle)
// prev.next = null → Splits list:
// Left half: [-10, -3]
// Right half: [5, 9]
// Step 2: Build Root
// root = new TreeNode(0)  // Root node
// root.left = sortedListToBST(head)  // Left half: [-10, -3]
// root.right = sortedListToBST(slow.next)  // Right half: [5, 9]
// Apply Code
// 🔁 Left Subtree: [-10, -3]
// Find Middle:

// slow = -10, fast = -10
// // First iteration
// prev = -10, slow = -3, fast = null
// Apply Code
// slow = -3 (middle)
// prev = -10
// Split: prev.next = null → Left half = [-10], Right half = []
// Build Left Subtree:

// rootLeft = new TreeNode(-3)
// rootLeft.left = sortedListToBST(head)  // [-10] → returns new TreeNode(-10)
// rootLeft.right = sortedListToBST(slow.next)  // [] → returns null
// Apply Code
// Result:
//    -3
//   /
// -10
// 🔁 Right Subtree: [5, 9]
// Find Middle:

// slow = 5, fast = 5
// // First iteration
// prev = 5, slow = 9, fast = null
// Apply Code
// slow = 9 (middle)
// prev = 5
// Split: prev.next = null → Left half = [5], Right half = []
// Build Right Subtree:

// rootRight = new TreeNode(9)
// rootRight.left = sortedListToBST(head)  // [5] → returns new TreeNode(5)
// rootRight.right = sortedListToBST(slow.next)  // [] → returns null
// Apply Code
// Result:
//    9
//   /
//  5
// 🌳 Final Tree Structure
//         0
//        / \
//      -3   9
//      /     \
//    -10     5
// 💡 Why This Works
// Splitting at Middle:

// Ensures left/right subtrees are height-balanced (size difference ≤ 1).
// Uses slow/fast pointers to find middle in O(n) time (optimal).
// Recursion:

// Each recursive call processes a smaller sublist.
// Base cases handle empty lists and single nodes.
// No Extra Space:

// Avoids converting list to array (saves O(n) space).
// Uses O(log n) space (recursion stack depth).
// ✅ Key Insight
// The middle node of a sorted list is always the root of a height-balanced BST.
// Splitting at the middle ensures the tree remains balanced while leveraging the sorted order.

// This approach efficiently converts the sorted linked list to a height-balanced BST in O(n log n) time and O(log n) space.

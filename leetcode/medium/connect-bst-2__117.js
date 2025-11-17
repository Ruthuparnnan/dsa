/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function (root) {
  let curr = root; // current level's node

  while (curr) {
    let dummy = new Node(0); // helps create next level links
    let tail = dummy; // tail pointer for next level

    // Traverse current level using next pointers already established
    while (curr) {
      if (curr.left) {
        tail.next = curr.left;
        tail = tail.next;
      }
      if (curr.right) {
        tail.next = curr.right;
        tail = tail.next;
      }
      curr = curr.next; // move to next in the current level
    }

    // Move down to the first node of the next level
    curr = dummy.next;
  }

  return root;
};

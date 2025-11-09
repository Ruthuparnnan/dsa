/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function (head) {
  if (!head) return null;

  const dummy = new ListNode(0);
  dummy.next = head;

  let lastSorted = head;
  let curr = head.next;

  while (curr) {
    if (curr.val >= lastSorted.val) {
      // Already in correct place
      lastSorted = lastSorted.next;
    } else {
      // Find insertion point
      let prev = dummy;
      while (prev.next.val < curr.val) {
        prev = prev.next;
      }

      // Insert curr between prev and prev.next
      lastSorted.next = curr.next;
      curr.next = prev.next;
      prev.next = curr;
    }

    curr = lastSorted.next;
  }

  return dummy.next;
};

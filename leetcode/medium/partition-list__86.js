/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  const less_head = new ListNode(0);
  const greater_head = new ListNode(0);
  let less_tail = less_head;
  let greater_tail = greater_head;

  let curr = head;

  while (curr) {
    if (curr.val < x) {
      less_tail.next = curr;
      less_tail = curr;
    } else {
      greater_tail.next = curr;
      greater_tail = curr;
    }

    curr = curr.next;
  }

  greater_tail.next = null;

  less_tail.next = greater_head.next;

  return less_head.next;
};

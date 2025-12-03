/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let carry = 0;
  let dummy = new ListNode();
  let temp = dummy;

  while (l1 || l2 || carry) {
    let sum = (l1?.val ?? 0) + (l2?.val ?? 0) + carry;
    carry = 0;
    const node = new ListNode(sum % 10);
    temp.next = node;
    if (sum > 9) carry += Math.floor(sum / 10);
    l1 = l1?.next;
    l2 = l2?.next;
    temp = temp.next;
  }

  return dummy.next;
};

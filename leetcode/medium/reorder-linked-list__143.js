// Definition for singly-linked list.
// function ListNode(val, next) { this.val = (val===undefined?0:val); this.next = (next===undefined?null:next); }

var reorderList = function (head) {
  if (!head || !head.next) return;

  // 1) find middle (slow ends at mid)
  let slow = head,
    fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // 2) reverse second half starting from slow.next
  let prev = null,
    cur = slow.next;
  slow.next = null; // split the list
  while (cur) {
    const nxt = cur.next;
    cur.next = prev;
    prev = cur;
    cur = nxt;
  }
  // now 'prev' is head of reversed second half

  // 3) merge two halves: head (first), prev (second)
  let p1 = head,
    p2 = prev;
  while (p2) {
    const n1 = p1.next,
      n2 = p2.next;
    p1.next = p2;
    p2.next = n1;
    p1 = n1;
    p2 = n2;
  }
};

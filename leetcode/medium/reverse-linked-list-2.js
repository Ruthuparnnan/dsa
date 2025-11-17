var reverseBetween = function (head, left, right) {
  // Step 1: Dummy node to simplify head handling
  const dummy = new ListNode(0);
  dummy.next = head;
  let prev = dummy;

  // Step 2: Move `prev` to the node before `left`
  for (let i = 1; i < left; i++) {
    prev = prev.next;
  }

  // Step 3: Start reversing from `left` to `right`
  let curr = prev.next; // first node of the sublist
  let next = null;
  let prevSub = null;

  for (let i = left; i <= right; i++) {
    next = curr.next;
    curr.next = prevSub;
    prevSub = curr;
    curr = next;
  }

  // Step 4: Reconnect
  prev.next.next = curr; // tail of reversed part connects to remaining list
  prev.next = prevSub; // node before left connects to new head of reversed part

  // Step 5: Return updated list
  return dummy.next;
};

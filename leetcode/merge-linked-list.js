function mergeLists(list1, list2) {
  const node = new ListNode(-1);

  let current = node;

  while (list1 !== null && list2 !== null) {
    if (list1.val > list2.val) {
      current.next = list2;
      list2 = list2.next;
    } else {
      current.next = list1;
      list1 = list1.next;
    }
    current = current.next;
  }

  current.next = list1 ? list1 : list2;
  return node.next;
}

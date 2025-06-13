function mergeToLists(list1, list2) {
  if (!list1 || !list2 || list1.length < 1 || list2.length < 1) return;
  let i = 0;
  let j = 0;
  let sortedArray = [];

  while (i < list1.length && j < list2.length) {
    if (list1[i] >= list2[j]) {
      sortedArray.push(list2[j]);
      j++;
    } else {
      sortedArray.push(list1[i]);
      i++;
    }
  }

  while (i < list1.length) sortedArray.push(list1[i++]);
  while (j < list2.length) sortedArray.push(list2[j++]);
  return sortedArray;
}

console.log(mergeToLists([1, 4, 5, 8], [2, 3, 6, 7]));

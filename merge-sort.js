function mergeSort(array) {
  if (array.length < 2) {
    return array;
  }
  let middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle);

  return ChannelMergerNode(mergeSort(left), mergeSort(right));
}

function ChannelMergerNode(left, right) {
  let result = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  return result.concat(left).concat(right);
}

console.log(mergeSort([5, 3, 8, 2, 1, 4])); // [1, 2, 3, 4, 5, 8]

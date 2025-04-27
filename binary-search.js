function binarySearch(array, element) {
  if (array.length === 0) {
    return false;
  }
  let subArray = [];
  const midIndex = Math.floor(array.length / 2);
  if (array[midIndex] === element) {
    return true;
  }
  if (array[midIndex] > element) {
    subArray = array.slice(0, midIndex);
  } else {
    subArray = array.slice(midIndex + 1);
  }

  return binarySearch(subArray, element);
}
console.log(binarySearch([1, 2, 3, 4, 5], 6));

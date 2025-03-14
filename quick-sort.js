function quickSort(array) {
  if (array.length < 2) {
    return array;
  }
  let pivot = array[array.length - 1];
  let left = [];
  let right = [];
  let equal = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else if (array[i] > pivot) {
      right.push(array[i]);
    } else {
      equal.push(array[i]); // Handles duplicate pivot values
    }
  }

  return [...quickSort(left), ...equal, ...quickSort(right)];
}

console.log(quickSort([-2, -20,1,5,2,3,8]));

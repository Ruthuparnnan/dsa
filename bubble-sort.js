function bubbleSort(array) {
  let swapped = true;
  let temp;
  do {
    swapped = false;
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[1 + i]) {
        temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return array;
}
console.log(bubbleSort([5, 3, 8, 2, 1, 4])); // [1, 2, 3, 4, 5, 8]

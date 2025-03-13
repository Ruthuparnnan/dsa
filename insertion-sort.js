function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    const temp = array[i];
    let j = i - 1;
    while (temp < array[j] && j > -1) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = temp;
  }
  return array;
}
console.log(insertionSort([5, 1, 6, 2, 1, 4])); // [1, 2, 3, 4, 5, 8]

const array1 = [1, 2, 3, 1, 2, 0, 0];
const array2 = [3, 2, 1];
// [1,1,1,2,2,2,3,3]
function mergeSort(arr1, arr2) {
  const filteredArray = arr1.concat(arr2).filter((element) => element);
  return filteredArray.sort((element1, element2) => element1 - element2);
}

console.log(mergeSort(array1, array2));
 
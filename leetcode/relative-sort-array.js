function relativeSortArray(arr1, arr2) {
  const freqMap = new Map();
  let result = [];

  for (let elem of arr1) {
    freqMap.set(elem, (freqMap.get(elem) || 0) + 1);
  }

  for (let elem of arr2) {
    let count = freqMap.get(elem);

    while (count > 0) {
      result.push(elem);
      count--;
      if (count === 0) {
        freqMap.delete(elem);
      }
    }
  }

  const remainingElements = Array.from(freqMap.keys()).sort((a, b) => a - b);
  for (let elem of remainingElements) {
    let count = freqMap.get(elem);
    while (count > 0) {
      result.push(elem);
      count--;
    }
  }

  return result;
}

// Example usage:
const arr1 = [2, 3, 1, 3, 2, 4, 5];
const arr2 = [2, 1, 4, 3, 9, 6];
const result = relativeSortArray(arr1, arr2);
console.log(result);

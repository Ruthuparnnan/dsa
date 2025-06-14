function duplicateZeros(arr) {
  let zerosCount = 0;
  let length = arr.length - 1;

  for (let i = 0; i <= length - zerosCount; i++) {
    if (arr[i] === 0) {
      if (i === length - zerosCount) {
        arr[length] = 0; // Edge case: if the last element is zero, we need to duplicate it
        length--;
        break;
      }
      zerosCount++;
    }
  }

  const last = length - zerosCount;

  for (let i = last; i >= 0; i--) {
    if (arr[i] === 0) {
      arr[i + zerosCount] = 0;
      zerosCount--;
      arr[i + zerosCount] = 0;
    } else {
      arr[i + zerosCount] = arr[i];
    }
  }

  return arr;
}

// Example usage:
const arr = [1, 0, 2, 3, 0, 4, 5, 0];
const result = duplicateZeros(arr);
console.log(result); // Output: [1, 0, 0, 2, 3, 0, 0, 4]

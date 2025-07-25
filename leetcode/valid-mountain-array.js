function validMountainArray(arr) {
  if (arr.length < 3) return false;

  let i = 0;

  while (i + 1 < arr.length && arr[i] < arr[i + 1]) {
    i++;
  }

  if (i === 0 || i === arr.length - 1) return false;

  while (i + 1 < arr.length && arr[i] > arr[i + 1]) {
    i++;
  }

  return i === arr.length - 1;
}

// Test cases
console.log(validMountainArray([2, 1])); // Output: false
console.log(validMountainArray([3, 5, 6])); // Output: false
console.log(validMountainArray([0, 3, 2, 1])); // Output: true

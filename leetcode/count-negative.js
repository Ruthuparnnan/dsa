function countNegatives(arr) {
  let count = 0;

const getCount = (arr) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] < 0) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return arr.length - left; // All elements after `left` are negative
};

for (let row of grid) {
  count += getCount(row);
}

return count;

}

// Example usage
console.log(countNegatives([1, 0, 0, -1, -1])); // Output: 1

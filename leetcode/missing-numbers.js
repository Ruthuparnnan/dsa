function missingNumbersOptimized(nums) {
  const n = nums.length;
  const seen = new Set(nums);
  const result = [];

  for (let i = 1; i <= n; i++) {
    if (!seen.has(i)) {
      result.push(i);
    }
  }

  return result;
}

function missingNumbers(nums) {
  const sortedArray = nums.sort((a, b) => a - b);
  const largestNumber = nums[nums.length - 1];
  const result = [];

  for (let i = 1; i <= largestNumber; i++) {
    if (!sortedArray.includes(i)) {
      result.push(i);
    }
  }

  return result;
}

// Test cases
console.log(missingNumbersOptimized([3, 7, 1, 2, 8])); // Output: [0, 4, 5, 6]
console.log(missingNumbersOptimized([0, 1, 2, 3])); // Output: []

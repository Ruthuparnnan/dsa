function findLengthOfLCIS(nums) {
  let maxLength = 0;
  let currentLength = 1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < nums[i + 1]) {
      currentLength += 1;
    } else {
      maxLength = Math.max(maxLength, currentLength);
      currentLength = 1;
    }
  }

  return maxLength;
}

// Test cases
console.log(findLengthOfLCIS([1, 3, 5, 4, 7])); // Output: 3
console.log(findLengthOfLCIS([2, 2, 2, 2, 2])); // Output: 1

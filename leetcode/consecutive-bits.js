function consecutiveBits(nums) {
  let count = 0;
  let maxCount = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      count++;
      if (count > maxCount) maxCount = count;
    } else {
      count = 0;
    }
  }

  return maxCount;
}

// Test cases
console.log(consecutiveBits([1, 1, 0, 1, 1, 1])); // Output: 3
console.log(consecutiveBits([1, 0, 1, 0, 1])); // Output: 1
console.log(consecutiveBits([0, 0, 0, 0])); // Output: 0

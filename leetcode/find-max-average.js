function findMaxAverage(nums, k) {
  let currentSum = 0;
  let maxSum;
  let i = 0;

  while (i < k) {
    currentSum += nums[i];
    i++;
  }
  maxSum = currentSum;

  while (i < nums.length) {
    currentSum = currentSum - nums[i - k] + nums[i];
    maxSum = Math.max(maxSum, currentSum);
    i++;
  }

  return maxSum / k;
}

// Test cases
console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4)); // Output: 12.75
console.log(findMaxAverage([5], 1)); // Output: 5.00
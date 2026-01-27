/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function (nums) {
  if (nums.length === 0) return [];

  const n = nums.length;

  nums.sort((a, b) => a - b);

  const dp = new Array(n).fill(1);

  const parent = new Array(n).fill(-1);

  let maxLen = 1;
  let maxIndex = 0;

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] % nums[j] === 0) {
        if (dp[j] + 1 > dp[i]) {
          dp[i] = dp[j] + 1;
          parent[i] = j;
        }
      }
    }

    if (dp[i] > maxLen) {
      maxLen = dp[i];
      maxIndex = i;
    }
  }

  const result = [];
  let curr = maxIndex;

  while (curr !== -1) {
    result.push(nums[curr]);
    curr = parent[curr];
  }

  return result;
};

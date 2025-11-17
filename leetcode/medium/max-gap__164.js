/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function (nums) {
  if (!nums || nums.length < 2) return 0;
  nums = nums.sort((a, b) => a - b);
  let max = -Infinity;

  for (let i = 0; i < nums.length - 1; i++) {
    const diff = nums[i + 1] - nums[i];
    max = Math.max(max, diff);
  }

  return max;
};

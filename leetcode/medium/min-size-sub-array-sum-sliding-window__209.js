/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let min = Infinity;
  let sum = 0;
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    sum += nums[j];
    while (sum >= target) {
      min = Math.min(min, j - i + 1);
      sum -= nums[i];
      i++;
    }
  }

  return min === Infinity ? 0 : min;
};

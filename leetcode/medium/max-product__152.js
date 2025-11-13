/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  if (!nums || nums.length === 0) return 0;

  let maxEndingHere = nums[0];
  let minEndingHere = nums[0];
  let answer = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const x = nums[i];

    // compute candidates using previous values
    const a = maxEndingHere * x;
    const b = minEndingHere * x;

    // new max/min at i
    const newMax = Math.max(x, a, b);
    const newMin = Math.min(x, a, b);

    maxEndingHere = newMax;
    minEndingHere = newMin;

    // update global answer
    answer = Math.max(answer, maxEndingHere);
  }

  return answer;
};

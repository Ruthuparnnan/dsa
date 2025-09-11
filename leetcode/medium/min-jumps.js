/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let end = 0;
  let jumps = 0;
  let farthest = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    farthest = Math.max(farthest, i + nums[i]);

    if (end === i) {
      jumps++;
      end = farthest;
    }
  }

  return jumps;
};

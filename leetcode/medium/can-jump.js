/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let maxReach = 0; // farthest index we can reach

  for (let i = 0; i < nums.length; i++) {
    if (i > maxReach) return false; // stuck, can't move further
    maxReach = Math.max(maxReach, i + nums[i]);
    if (maxReach >= nums.length - 1) return true; // can reach the end
  }

  return true;
};

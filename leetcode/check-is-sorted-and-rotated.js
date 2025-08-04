/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function (nums) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    const next = nums[(i + 1) % nums.length];
    if (nums[i] > next) count++;
  }

  return count <= 1;
};

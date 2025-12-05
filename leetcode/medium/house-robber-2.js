/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return Math.max(nums[0], nums[1]);

  function bob(nums) {
    let prev2 = 0;
    let prev1 = 0;

    for (let num of nums) {
      let curr = Math.max(prev1, num + prev2);
      prev2 = prev1;
      prev1 = curr;
    }

    return prev1;
  }
  const case1 = nums.slice(1);
  const case2 = nums.slice(0, nums.length - 1);
  return Math.max(bob(case1), bob(case2));
};

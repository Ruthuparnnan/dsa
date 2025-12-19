/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const result = new Array(nums.length);

  for (let i = 0; i < nums.length; i++) {
    if (i === 0) result[0] = 1;
    else result[i] = nums[i - 1] * result[i - 1];
  }

let right=1;
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= right;
    right *= nums[i]
  }

  return result;
};

console.log(productExceptSelf([1, 2, 3, 4]));

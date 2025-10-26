/**
 * @param {number[]} nums
 * @param {number} key
 * @return {number}
 */
var mostFrequent = function (nums, key) {
  const map = new Map();
  let count = 0;
  let num;

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === key) {
      const value = (map.get(nums[i + 1]) || 0) + 1;
      map.set(nums[i + 1], value);
      if (value > count) {
        count = value;
        num = nums[i + 1];
      }
    }
  }

  return num;
};

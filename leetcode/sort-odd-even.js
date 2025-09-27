/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortEvenOdd = function (nums) {
  if (nums.length < 3) return nums;

  const odds = [];
  const evens = [];

  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      evens.push(nums[i]);
    } else {
      odds.push(nums[i]);
    }
  }

  let e = 0,
    o = 0;
  const result = [];

  odds.sort((a, b) => b - a);
  evens.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      result.push(evens[e++]);
    } else {
      result.push(odds[o++]);
    }
  }

  return result;
};

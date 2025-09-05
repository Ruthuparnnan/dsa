/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSubsequence = function (nums, k) {
  const pair = [];

  for (let i = 0; i < nums.length; i++) {
    pair.push([i, nums[i]]);
  }

  pair.sort((a, b) => b[1] - a[1]);

  const slice = pair.slice(0, k);

  slice.sort((a, b) => a[0] - b[0]);

  return slice.map((elem) => elem[1]);
};

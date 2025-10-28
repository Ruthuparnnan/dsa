/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const set = new Set(nums);
  let longest = 0;

  for (let num of set) {
    if (!set.has(num - 1)) {
      let count = 1;
      let currentNum = num + 1;

      while (set.has(currentNum)) {
        currentNum++;
        count++;
      }

      longest = Math.max(count, longest);
    }
  }

  return longest;
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function (nums1, nums2, nums3) {
  // Convert arrays to sets to remove duplicates
  let s1 = new Set(nums1);
  let s2 = new Set(nums2);
  let s3 = new Set(nums3);

  // Map to count how many sets each number appears in
  let countMap = new Map();

  for (let num of s1) countMap.set(num, (countMap.get(num) || 0) + 1);
  for (let num of s2) countMap.set(num, (countMap.get(num) || 0) + 1);
  for (let num of s3) countMap.set(num, (countMap.get(num) || 0) + 1);

  // Collect numbers that appear in at least 2 sets
  let result = [];
  for (let [num, count] of countMap.entries()) {
    if (count >= 2) result.push(num);
  }

  return result;
};

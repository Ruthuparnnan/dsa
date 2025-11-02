/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  const arr1 = [];
  const arr2 = [];

  for (let num of set1.values()) {
    if (!set2.has(num)) arr1.push(num);
  }

  for (let num of set2.values()) {
    if (!set1.has(num)) arr2.push(num);
  }

  return [arr1, arr2];
};

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function (nums) {
  const countMap = new Map();

  for (let num of nums) {
    countMap.set(num, (countMap.get(num) || 0) + 1);
  }

  for (let value of countMap.values()) {
    if (value % 2 !== 0) return false;
  }

  return true;
};

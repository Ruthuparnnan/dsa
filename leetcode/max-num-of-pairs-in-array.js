/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function (nums) {
  let totalPairs = 0;
  let leftOvers = 0;

  const map = new Map();

  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  for (let value of map.values()) {
    totalPairs += Math.floor(value / 2);
    leftOvers += value % 2;
  }

  return [totalPairs, leftOvers];
};

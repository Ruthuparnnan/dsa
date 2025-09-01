/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function (arr, k) {
  const freqMap = new Map();
  let freq = 0;

  for (let elem of arr) {
    freqMap.set(elem, (freqMap.get(elem) || 0) + 1);
  }

  for (let [char, count] of freqMap.entries()) {
    if (count === 1) freq++;
    if (freq === k) return char;
  }

  return "";
};

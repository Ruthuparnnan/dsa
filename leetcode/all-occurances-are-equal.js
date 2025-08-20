/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function (s) {
  const countMap = new Map();

  for (const char of s) {
    countMap.set(char,(countMap.get(char) || 0) + 1);
  }

  const unique = new Set(countMap.values());

   return unique.size === 1;
};

console.log(areOccurrencesEqual("aaabb"));

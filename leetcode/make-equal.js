/**
 * @param {string[]} words
 * @return {boolean}
 */
var makeEqual = function (words) {
  if (words.length === 1) return true; // Single word is trivially equal

  const countMap = new Map();
  const n = words.length;

  for (let word of words) {
    for (let char of word) {
      countMap.set(char, (countMap.get(char) || 0) + 1);
    }
  }

  for (let value of countMap.values()) {
    if (value % n !== 0) return false;
  }

  return true;
};
// Example usage:
console.log(makeEqual(["abc", "a", "bc"])); // false

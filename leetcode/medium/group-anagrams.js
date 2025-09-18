/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = new Map();

  for (let word of strs) {
    const key = word.split("").sort().join();
    if (map.has(key)) {
      map.get(key).push(word);
    } else {
      map.set(key, [word]);
    }
  }

  const result = [];

  for (let [key, arr] of map.entries()) {
    result.push(arr);
  }

  return result;
};

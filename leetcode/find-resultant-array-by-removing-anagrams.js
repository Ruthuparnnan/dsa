/**
 * @param {string[]} words
 * @return {string[]}
 */
var removeAnagrams = function (words) {
  let result = [];
  let prevSorted = "";

  for (let word of words) {
    const sorted = word.split("").sort().join("");
    if (sorted !== prevSorted) {
      result.push(word);
      prevSorted = sorted;
    }
  }

  return result;
};

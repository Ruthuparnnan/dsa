/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function (sentences) {
  let maxCount = 0;

  for (let sentence of sentences) {
    const count = sentence.split(" ").length;
    maxCount = Math.max(maxCount, count);
  }

  return maxCount;
};

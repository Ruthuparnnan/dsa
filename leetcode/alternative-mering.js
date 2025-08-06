/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let result = "";
  let i = 0;

  while (i < word1.length && i < word2.length) {
    result += word1[i] + word2[i];
    i++;
  }

  if (i < word1.length) result += word1.slice(i);
  if (i < word2.length) result += word2.slice(i);

  return result;
};

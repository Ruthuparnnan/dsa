/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function (text, brokenLetters) {
  let count = 0;
  text = text.split(" ");
  const set = new Set(brokenLetters);

  for (let word of text) {
    for (const char of word) {
      if (set.has(char)) {
        count++;
        break;
      }
    }
  }

  return text.length - count;
};

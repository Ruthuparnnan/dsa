/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var checkAlmostEquivalent = function (word1, word2) {
  const freq1 = new Map();
  const freq2 = new Map();

  for (let char of word1) {
    freq1.set(char, (freq1.get(char) || 0) + 1);
  }

  for (let char of word2) {
    freq2.set(char, (freq2.get(char) || 0) + 1);
  }

  for (let [char, count] of freq1.entries()) {
    const value = freq2.get(char) || 0;
    const difference = Math.abs(value - count);
    if (difference > 3) return false;
  }

  // check chars in word2 (to catch extra chars not in word1)
  for (let [char, count] of freq2.entries()) {
    const value = freq1.get(char) || 0;
    if (Math.abs(value - count) > 3) return false;
  }

  return true;
};

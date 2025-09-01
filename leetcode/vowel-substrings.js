/**
 * @param {string} word
 * @return {number}
 */
var countVowelSubstrings = function (word) {
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  let count = 0;

  for (let i = 0; i < word.length; i++) {
    if (!vowels.has(word[i])) continue;
    const seen = new Set();

    for (let j = i; j < word.length; j++) {
      if (!vowels.has(word[j])) break;
      seen.add(word[j]);
      if (seen.size === 5) count++;
    }
  }

  return count;
};

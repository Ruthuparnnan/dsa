/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
  const seen = new Set();
  const result = new Set();

  for (let i = 0; i <= s.length - 10; i++) {
    const str = s.substring(i, i + 10);
    if (seen.has(str)) {
      result.add(str);
    } else {
      seen.add(str);
    }
  }

  return [...result];
};

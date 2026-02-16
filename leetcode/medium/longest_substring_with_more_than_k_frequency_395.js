/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function (s, k) {
  if (s.length < k) return 0;

  const freq = {};

  for (let char of s) {
    freq[char] = (freq[char] || 0) + 1;
  }

  for (let char in freq) {
    if (freq[char] < k) {
      return Math.max(...s.split(char).map((sub) => longestSubstring(sub, k)));
    }
  }

  return s.length;
};

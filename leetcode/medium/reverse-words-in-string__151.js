/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const filtered = s.replace(/\s{2,}/g, " ").trim();

  return filtered.split(" ").reverse().join(" ");
};

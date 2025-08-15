/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function (s) {
  let count = 0;

  for (let i = 0; i < s.length - 2; i++) {
    let slice = s.slice(i, i + 3); // length 3
    let set = new Set(slice);
    if (set.size === 3) {
      // all characters unique
      count++;
    }
  }

  return count;
};

/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function (s) {
  let firstIndexOfB = Infinity;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "b") {
      firstIndexOfB = Math.min(firstIndexOfB, i);
    } else {
      if (i > firstIndexOfB) return false;
    }
  }

  return true;
};

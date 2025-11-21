/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var digitSum = function (s, k) {
  while (s.length > k) {
    let next = "";
    for (let i = 0; i < s.length; i += k) {
      let sum = 0;
      const group = s.substring(i, i + k);
      for (let ch of group) {
        sum += Number(ch);
      }
      next += sum;
    }
    s = next;
  }

  return s;
};

/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function (n) {
  const res = [];
  let curr = 1;

  for (let i = 0; i < n; i++) {
    res.push(curr);

    if (curr * 10 <= n) {
      curr *= 10;
    } else {
      while (curr % 10 === 9 || curr + 1 > n) {
        curr = Math.floor(curr / 10);
      }
      curr++;
    }
  }

  return res;
};

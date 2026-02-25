/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function (n) {
  let digitLen = 1;
  let count = 9;
  let start = 1;

  while (n > digitLen * count) {
    n -= digitLen * count;
    digitLen++;
    count *= 10;
    start *= 10;
  }

  const num = start + Math.floor((n - 1) / digitLen);
  const index = (n - 1) % digitLen;

  return Number(num.toString()[index]);
};

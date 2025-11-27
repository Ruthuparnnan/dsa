/**
 * @param {string} num
 * @return {boolean}
 */
var digitCount = function (num) {
  const countMap = new Map();

  for (let n of num) {
    countMap.set(n, (countMap.get(n) || 0) + 1);
  }

  for (let i = 0; i < num.length; i++) {
    const count = countMap.get(String(i)) || 0; // convert i to string
    if (count !== Number(num[i])) return false;
  }

  return true;
};

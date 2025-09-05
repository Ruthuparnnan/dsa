/**
 * @param {number[]} digits
 * @return {number[]}
 */
var findEvenNumbers = function (digits) {
  const set = new Set();

  for (let i = 0; i < digits.length; i++) {
    for (let j = 0; j < digits.length; j++) {
      if (i === j || digits[i] === 0) continue;
      for (let k = 0; k < digits.length; k++) {
        if (j === k || i === k || digits[k] % 2 !== 0) continue;
        const number = digits[i] * 100 + digits[j] * 10 + digits[k];
        set.add(number);
      }
    }
  }

  return Array.from(set).sort((a, b) => a - b);
};

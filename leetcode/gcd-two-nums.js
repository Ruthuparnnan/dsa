/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function (nums) {
  const gcd = (a, b) => {
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  };

  let min = Infinity,
    max = -Infinity;
  for (let num of nums) {
    if (num < min) min = num;
    if (num > max) max = num;
  }

  return gcd(min, max);
};

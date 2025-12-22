var singleNumber = function (nums) {
  let xor = 0;

  // Step 1: XOR all numbers
  for (let n of nums) {
    xor ^= n;
  }

  // Step 2: Isolate rightmost set bit
  let diff = xor & -xor;

  // Step 3: Use diff to split into two groups
  let x = 0,
    y = 0;
  for (let n of nums) {
    if (n & diff) {
      x ^= n; // group with bit = 1
    } else {
      y ^= n; // group with bit = 0
    }
  }

  return [x, y];
};

console.log(singleNumber([1, 2, 1, 3, 2, 5]));

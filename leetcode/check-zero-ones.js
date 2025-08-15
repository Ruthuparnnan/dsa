var checkZeroOnes = function (s) {
  let zero = 0;
  let one = 0;
  let maxOne = 0;
  let maxZero = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "1") {
      one++;
      maxOne = Math.max(one, maxOne);
      zero = 0;
    } else {
      zero++;
      maxZero = Math.max(zero, maxZero);
      one = 0;
    }
  }

  return maxOne > maxZero;
};

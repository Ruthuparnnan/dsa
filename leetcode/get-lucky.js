var getLucky = function (s, k) {
  let sum = 0;

  // Step 1: directly sum digits of letter positions
  for (const ch of s) {
    let val = ch.charCodeAt(0) - 96; // a=1, b=2, ...
    while (val > 0) {
      sum += val % 10;
      val = Math.floor(val / 10);
    }
  }

  // Step 2: perform k-1 more digit sums
  for (let i = 1; i < k; i++) {
    let newSum = 0;
    while (sum > 0) {
      newSum += sum % 10;
      sum = Math.floor(sum / 10);
    }
    sum = newSum;
  }

  return sum;
};


console.log(getLucky("zbax",2));

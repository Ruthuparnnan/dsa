function minStartValueOptimized(nums) {
  let minPrefix = Infinity;
  let prefixSum = 0;

  for (let num of nums) {
    prefixSum += num;
    minPrefix = Math.min(minPrefix, prefixSum);
  }

  return 1 - Math.min(minPrefix, 0);
}

function minStartValue(nums) {
  for (let j = 1; j < Infinity; j++) {
    let sum = j;
    let i = 0;
    while (sum > 0 && i < nums.length) {
      sum += nums[i];
      i++;
    }

    if (i === nums.length && sum > 0) return j;
  }
}

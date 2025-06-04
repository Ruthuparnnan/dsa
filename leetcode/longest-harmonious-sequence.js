function findLHS(nums) {
  let count = {};
  let max = 0;

  for (let num of nums) {
    count[num] = (count[num] || 0) + 1;
  }

  for (let num in count) {
    if (count[num + 1]) {
      max = Math.max(max, count[num] + count[num + 1]);
    }
  }

  return max;
}

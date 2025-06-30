function miniSubsequence(nums) {
  nums.sort((a, b) => b - a);

  const total = nums.reduce((acc, elem) => acc + elem, 0);
  const result = [];
  let sum = 0;

  for (const num of nums) {
    if (sum > total / 2) break;
    sum += num;
    result.push(num);
  }
  return result;
}

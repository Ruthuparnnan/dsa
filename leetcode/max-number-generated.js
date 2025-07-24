function maxNumberGenerated(n) {
  const nums = Array.from({ length: n + 1 }).fill(0);
  if (n >= 1) nums[1] = 1;

  for (let i = 1; i <= n; i++) {
    if (2 * i <= n) {
      nums[2 * i] = nums[i];
    }
    if (2 * i + 1 <= n) {
      nums[2 * i + 1] = nums[i] + nums[i + 1];
    }
  }

  return Math.max(...nums);
}

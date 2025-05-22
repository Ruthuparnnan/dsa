function maxProductOfThree(nums) {
  if (nums.length <= 3) return nums.reduce((acc, item) => acc * item);
  nums.sort((a, b) => a - b);

  return Math.max(
    nums[0] * nums[1] * nums[nums.length - 1],
    nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3]
  );
}

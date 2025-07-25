function largestPerimeter(nums) {
  nums.sort((a, b) => b - a);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < nums[i + 1] + nums[i + 2])
      return nums[i] + nums[i + 1] + nums[i + 2];
  }
  return 0;
}

function isMonotonic(nums) {
  let increasing = true;
  let decreasing = true;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      decreasing = false;
    }
    if (nums[i] < nums[i - 1]) {
      increasing = false;
    }
  }

  return increasing || decreasing;
}

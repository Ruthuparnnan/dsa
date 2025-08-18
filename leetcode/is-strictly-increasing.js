var canBeIncreasing = function (nums) {
  let count = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] <= nums[i - 1]) {
      if (count > 0) return false; // already removed one
      count++;

      // Decide which one to skip
      if (i > 1 && nums[i] <= nums[i - 2]) {
        nums[i] = nums[i - 1]; // pretend removing nums[i]
      }
    }
  }
  return true;
};

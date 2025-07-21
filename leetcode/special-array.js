function specialArrayOptimized(nums) {
  nums.sort((a, b) => a - b);
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    const x = n - i; // number of elements >= nums[i]
    if (nums[i] >= x && (i === 0 || nums[i - 1] < x)) {
      return x;
    }
  }

  return -1;
}

function specialArray(nums) {
  for (let i = 1; i <= nums.length; i++) {
    const count = nums.filter((n) => n >= i).length;
    if (count === i) return i;
  }
  return -1;
}

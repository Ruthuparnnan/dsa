function binarySearch(nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (target === nums[mid]) return mid;

    if (target > nums[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return -1;
}

// Test cases
console.log(binarySearch([-1, 0, 3, 5, 9, 12], 9)); // 4

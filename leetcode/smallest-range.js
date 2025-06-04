function smallestRange(nums, k) {
  let max = -Infinity;
  let min = Infinity;

  for (let num of nums) {
    max = Math.max(max, num);
    min = Math.min(min, num);
  }

  const newMax = max - k;
  const newMin = min + k;

  return Math.max(0, newMax - newMin);
}

// Test cases
console.log(smallestRange([1], 0)); // Output: 0
console.log(smallestRange([0, 10], 2)); // Output: 6 => 0+2 and 10-2 then minus them

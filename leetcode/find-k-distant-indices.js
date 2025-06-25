function findKDistantIndices(nums, key, k) {
  const set = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === key) {
      let j = i - k < 0 ? 0 : i - k;
      const end = i + k >= nums.length ? nums.length - 1 : i + k;

      while (j <= end) {
        set.add(j);
        j++;
      }
    }
  }

  return Array.from(set);
}

// Example usage
const nums = [2, 2, 2, 2, 2];
const key = 2;
const k = 2;
console.log(findKDistantIndices(nums, key, k)); //
// Output: [1, 2, 3, 4, 5]

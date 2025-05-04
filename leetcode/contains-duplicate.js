function containsDuplicateBest(nums) {
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      return true;
    }
  }
  return false;
}

function containsDuplicateOptimized(nums) {
  return new Set(nums).size !== nums.length;
}

console.log(containsDuplicate([1, 2, 3, 1]));

function containsDuplicate(nums) {
  const set = new Set();

  for (let num of nums) {
    if (set.has(num)) return true;
    set.add(num);
  }

  return false;
}

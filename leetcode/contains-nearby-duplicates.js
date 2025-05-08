function containsNearbyDuplicateOptimized(nums, k) {
  const set = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      return true;
    }

    set.add(nums[i]);

    if (i >= k) {
      set.delete(nums[i - k]); // Remove the element that is now out of the window
    }
  }

  return false;
}

function containsNearbyDuplicate(nums, k) {
  let i = 0;
  let j = 0;

  while (!(i === nums.length - 1 && j === nums.length - 1)) {
    if (i !== j && nums[i] === nums[j] && Math.abs(i - j) <= k) {
      return true;
    }
    if (j === nums.length - 1) {
      j = 0;
      i += 1;
    } else {
      j++;
    }
  }

  return false;
}

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1));
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));

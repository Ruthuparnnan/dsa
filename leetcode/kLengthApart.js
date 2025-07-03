function kLenghtApartOptimized(nums, k) {
  let lastSeen = -1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      if (i - lastSeen <= k && lastSeen !== -1) return false;
      lastSeen = i;
    }
  }

  return true;
}

function kLenghtApart(nums, k) {
  let seen = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) seen.push(i + 1);
  }

  for (let i = seen.length - 1; i > 0; i--) {
    const diff = seen[i] - seen[i - 1];
    if (diff <= k) return false;
  }

  return true;
}

console.log(kLenghtApart([1, 0, 0, 0, 1, 0, 0, 1], 2));

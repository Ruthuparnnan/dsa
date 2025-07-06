function shuffle(nums, n) {
  const result = [];

  for (let i = 0; i < n; i++) {
    result.push(nums[i]);
    result.push(nums[i+n]);
  }

  return result;
}

console.log(shuffle([2, 5, 1, 3, 4, 7], 3));

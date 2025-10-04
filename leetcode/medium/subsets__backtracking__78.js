var subsets = function (nums) {
  const result = [];

  function backtrack(start, path) {
    // Add the current subset
    result.push([...path]);

    // Explore further
    for (let i = start; i < nums.length; i++) {
      path.push(nums[i]);
      backtrack(i + 1, path);
      path.pop();
    }
  }

  backtrack(0, []);
  return result;
};

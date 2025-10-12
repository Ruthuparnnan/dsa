var subsetsWithDup = function (nums) {
  nums.sort((a, b) => a - b); // sort to handle duplicates
  const result = [];
  const subset = [];

  function backtrack(start) {
    result.push([...subset]);

    for (let i = start; i < nums.length; i++) {
      // skip duplicates
      if (i > start && nums[i] === nums[i - 1]) continue;

      subset.push(nums[i]);
      backtrack(i + 1);
      subset.pop();
    }
  }

  backtrack(0);
  return result;
};

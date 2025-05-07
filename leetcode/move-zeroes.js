function moveZeroes(nums) {
  let k = 0; // position to place the next non-zero element

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      if (i !== k) {
        [nums[i], nums[k]] = [nums[k], nums[i]];
      }
      k++;
    }
  }

  return nums;
}

console.log(moveZeroes([4, 1, 0, 3, 12]));

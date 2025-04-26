function removeElement(nums, val) {
  if (!nums) return 0;
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
}
console.log(removeElement([1, 1, 2, 3, 1, 4], 1));

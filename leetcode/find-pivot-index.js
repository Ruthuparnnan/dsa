function findPivotIndex(nums) {
  const totalSum = nums.reduce((acc, elem) => acc + elem, 0);
  let leftSum = 0;

  for (let i = 0; i < nums.length; i++) {
    leftSum += nums[i];

    if (leftSum - nums[i] === totalSum - leftSum) return i;
  }

  return -1;
}

console.log(findPivotIndex([1, 7, 3, 6, 5, 6]));
console.log(findPivotIndex([1, 2, 3]));
console.log(findPivotIndex([2, 1, -1]));

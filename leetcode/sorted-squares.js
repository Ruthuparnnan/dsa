//Given an integer array nums sorted in non-decreasing order,
// return an array of the squares of each number sorted in non-decreasing order.

function sortedSquares(nums) {
  const array = new Array(nums.length);
  let right = nums.length - 1;
  let left = 0;
  let i = nums.length - 1;

  while (left <= right) {
    const rightSquare = nums[right] * nums[right];
    const leftSquare = nums[left] * nums[left];

    if (rightSquare > leftSquare) {
      array[i] = rightSquare;
      right--;
    } else {
      array[i] = leftSquare;
      left++;
    }

    i--;
  }

  return array;
}

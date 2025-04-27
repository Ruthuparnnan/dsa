function twoSum(array, target) {
  let hasSum = false;
  for (let i = 0; i < array.length; i++) {
    for (let j = 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        hasSum = true;
      }
    }
  }

  return hasSum;
}
// console.log(twoSum([4, 2, 2, 1, 5], 6));

function twoSumLeetCode(nums, target) {
  if (nums.length < 2) return false;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }

  return [];
}

console.log(twoSumLeetCode([3, 2, 4], 6));
console.log(twoSumLeetCode([2, 5, 5, 11], 10));

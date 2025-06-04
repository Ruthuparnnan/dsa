function arrayPairSum(nums) {
  const sortedArray = nums.sort((a, b) => a - b);
  let sum = 0;

  for (let i = 0; i < nums.length; i += 2) {
    sum += sortedArray[i];
  }

  return sum;
}

// Test cases
console.log(arrayPairSum([1, 4, 3, 2]));

function sortedArrayByParityOptimized(nums) {
  const result = new Array(nums.length);
  let start = 0;
  let end = nums.length - 1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 !== 0) {
      result[end--] = nums[i];
    } else {
      result[start++] = nums[i];
    }
  }

  return result;
}

function sortedArrayByParity(nums) {
  const odds = nums.filter((item) => item % 2 !== 0);
  const evens = nums.filter((item) => item % 2 === 0);
  return [...evens, ...odds];
}

// Test cases
console.log(sortedArrayByParity([3, 1, 2, 4])); // Output: [2,4,1,3]

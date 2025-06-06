function sortArrayByParityOptimized(nums) {
  let even = 0; // Even indices
  let odd = 1; // Odd indices

  while (even < nums.length && odd < nums.length) {
    // If the even index has an odd number
    if (nums[even] % 2 !== 0) {
      // Find the next odd index that has an even number
      while (nums[odd] % 2 !== 0) {
        odd += 2;
      }
      // Swap them
      [nums[even], nums[odd]] = [nums[odd], nums[even]];
    }
    even += 2;
  }
  return nums;
}

function sortArrayByParity(nums) {
  const oddNumbers = [];
  const evenNumbers = [];
  const result = [];

  for (let num of nums) {
    if (num % 2 === 0) {
      evenNumbers.push(num);
    } else {
      oddNumbers.push(num);
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      result[i] = evenNumbers.pop();
    } else {
      result[i] = oddNumbers.pop();
    }
  }

  return result;
}

const nums = [3, 1, 2, 4];
const sortedArray = sortArrayByParity(nums);
console.log(sortedArray); // Output: [2, 4, 3, 1]

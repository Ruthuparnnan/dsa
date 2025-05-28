function dominantIndex(nums) {
  let largest = 0;
  let secondLargest = 0;
  let index = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > largest) {
      secondLargest = largest;
      largest = nums[i];
      index = i;
    } else if (nums[i] > secondLargest) {
      secondLargest = nums[i];
    }
  }

  return largest >= secondLargest * 2 ? index : -1;
}

// Test cases
console.log(dominantIndex([3, 6, 1, 0])); // Output: 1
console.log(dominantIndex([1, 2, 3, 4])); // Output: -1

function findErrorNums(nums) {
  let duplicate;
  let map = new Map();
  let i = 0;

  while (!duplicate) {
    if (map.get(nums[i])) {
      duplicate = nums[i];
    }
    map.set(nums[i], true);
    i++;
  }
  let n = nums.length;
  let expectedSum = (n * (n + 1)) / 2;
  let actualSum = nums.reduce((acc, elem) => acc + elem);
  let missing = expectedSum - (actualSum - duplicate);
  return [duplicate, missing];
}

// Test cases
let nums1 = [1,1];
console.log(findErrorNums(nums1)); // Output

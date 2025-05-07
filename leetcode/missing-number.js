function missingNumberOptimized(nums) {
  const n = nums.length;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = nums.reduce((acc, num) => acc + num, 0);

  return expectedSum - actualSum;
}

function missingNumber(nums) {
  for (let i = 1; i <= nums.length; i++) {
    if (!nums.includes(i)) return i;
  }
  return null;
}

console.log(missingNumberOptimized([3, 0, 1]));
console.log(missingNumberOptimized([0, 1]));

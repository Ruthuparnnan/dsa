function thirdMax(nums) {
  const uniqueNums = [...new Set(nums)];
  uniqueNums.sort((a, b) => b - a);
  return uniqueNums.length >= 3 ? uniqueNums[2] : uniqueNums[0];
}
console.log(thirdMax([3, 2, 1])); // 1

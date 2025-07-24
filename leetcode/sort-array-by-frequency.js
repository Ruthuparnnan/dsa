function sortArrayByIncreasingFrequency() {
  const countMap = new Map();

  for (let num of nums) {
    countMap.set(num, (countMap.get(num) || 0) + 1);
  }

  return nums.sort((a, b) => {
    const countA = countMap.get(a);
    const countB = countMap.get(b);

    if (countA !== countB) return countA - countB;
    return b - a;
  });
}

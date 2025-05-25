function findShortestSubArray(nums) {
  const lastseenMap = new Map();
  const firstseenMap = new Map();
  const freqMap = new Map();
  let degree = 0;

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (!firstseenMap.has(num)) {
      firstseenMap.set(num, i);
    }
    lastseenMap.set(num, i);

    freqMap.set(num, (freqMap.get(num) || 0) + 1);
    degree = Math.max(degree, freqMap.get(num));
  }

  let minLength = Infinity;
  for (let [num, count] of freqMap) {
    if (degree === count) {
      const length = lastseenMap.get(num) - firstseenMap.get(num)+1;
      minLength = Math.min(minLength, length);
    }
  }

  return minLength;
}

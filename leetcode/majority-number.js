function majorityElementOptimized(nums) {
  let count = 0;
  let candidate;

  for (let num of nums) {
    if (count === 0) {
      candidate = num;
    }
    count += num === candidate ? 1 : -1;
  }

  return candidate;
}

function majorityElement(nums) {
  // O(n) and O(n)
  const count = {};
  let maxCount = 0;
  let majority;

  for (let num of nums) {
    count[num] = (count[num] || 0) + 1;

    if (count[num] > maxCount) {
      maxCount = count[num];
      majority = num;
    }
  }

  return majority;
}

console.log(
  majorityElementOptimized([1, 2, 2, 2, 2, 2, 2, 2, 3, 4, 4, 4, 4, 4])
);

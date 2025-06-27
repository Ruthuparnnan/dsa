function smallerNumbersThanCurrent(nums) {
  const sorted = [...nums].sort((a, b) => a - b);
  const map = new Map();

  for (let i = 0; i < sorted.length; i++) {
    if (!map.has(sorted[i])) {
      map.set(sorted[i], i); // index = number of smaller elements
    }
  }

  return nums.map((num) => map.get(num));
}

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]));

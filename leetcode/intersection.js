function intersectionOptimized(nums1, nums2) {
  const set = new Set(nums1);
  const result = new Set();

  for (const num of nums2) {
    if (set.has(num)) {
      result.add(num);
    }
  }

  return Array.from(result);
}

function intersection(nums1, nums2) {
  const result = new Set();

  nums1.forEach((item, index) => {
    if (nums2.includes(item)) {
      result.add(item);
    }
  });

  return Array.from(result);
}

console.log(intersectionOptimized([1, 2, 2, 1], [2, 2])); // [2]
console.log(intersectionOptimized([4, 9, 5], [9, 4, 9, 8, 4])); // [9, 4]

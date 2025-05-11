function intersection2(nums1, nums2) {
  const count = {};
  const result = [];

  for (const num of nums1) {
    count[num] = (count[num] || 0) + 1;
  }

  for (const num of nums2) {
    if (count[num] > 0) {
      result.push(num);
      count[num] = --count[num];
    }
  }

  return result;
}

var removeDuplicates = function (nums) {
  // Handle edge cases where the array has 0, 1, or 2 elements.
  // In these cases, no element can appear more than twice,
  // so the entire array is valid.
  if (nums.length <= 2) {
    return nums.length;
  }

  // k is the "write pointer" or the position where the next valid element should be placed.
  // It also represents the current length of the modified array.
  // We start k at 2 because the first two elements are always considered valid
  // (as they cannot have appeared more than twice yet).
  let k = 2;

  // Iterate through the array starting from the third element (index 2)
  // using 'i' as the "read pointer".
  for (let i = 2; i < nums.length; i++) {
    // Compare the current element nums[i] with the element at nums[k-2].
    // nums[k-2] is the element two positions behind our current write pointer.
    // If nums[i] is different from nums[k-2], it means:
    // 1. It's a completely new number, or
    // 2. It's the second occurrence of the number currently at nums[k-1].
    // In either case, it's a valid element to keep.
    if (nums[i] !== nums[k - 2]) {
      // Place the current element nums[i] at the position indicated by k.
      nums[k] = nums[i];
      // Increment k to move the write pointer forward.
      k++;
    }
    // If nums[i] is the same as nums[k-2], it means we already have two
    // occurrences of this number (at nums[k-2] and nums[k-1]),
    // so nums[i] would be a third, disallowed occurrence.
    // In this case, we simply skip nums[i] and do not increment k,
    // effectively "removing" it by not including it in the valid prefix.
  }

  // k now holds the new length of the array after removing extra duplicates.
  return k;
};

function searchInsertBF(nums, target) {
  if (!nums) return -1;

  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    } else {
      if (nums[i] <= target) {
        k = i + 1;
      }
    }
  }
  return k;
}

function searchInsert(nums,target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1; // target is on right side
    } else {
      right = mid - 1; // target is on left side
    }
  }

  // if not found, left will be the insert position
  return left;
}

console.log(searchInsert([1, 3,  5, 6], 4)); //2

function nextGreaterElementOptimized(nums1, nums2) {
  const stack = [];
  const map = new Map();

  for (const num of nums2) {
    while (stack.length && stack[stack.length - 1] < num) {
      map.set(stack.pop(), num);
    }
    stack.push(num);
  }

  return nums1.map((num) => map.get(num) || -1);
}

function nextGreaterElement(nums1, nums2) {
  let i = 0;
  let result = [];

  while (i < nums1.length) {
    const index = nums2.indexOf(nums1[i]);
    let j = index + 1;
    let found = false;

    while (!found && j < nums2.length) {
      if (nums2[j] > nums1[i]) {
        result.push(nums2[j]);
        found = true;
      } else {
        j++;
      }
    }
    if (!found) result.push(-1);
    i++;
  }

  return result;
}

// Test cases
console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2])); // Output: [-1, 3, -1]
console.log(nextGreaterElement([2, 4], [1, 2, 3, 4])); // Output: [3, -1]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  if (nums.length === 0) return [-1, -1];

  function findBound(isFirst) {
    let start = 0;
    let end = nums.length - 1;
    let bound = -1;

    while (start <= end) {
      let mid = Math.floor((start + end) / 2);

      if (nums[mid] === target) {
        bound = mid;
        if (isFirst) {
          end = mid - 1;
        } else {
          start = mid + 1;
        }
      } else if (nums[mid] < target) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }

    return bound;
  }

  const first = findBound(true);
  const last = findBound(false);

  return [first, last];
};

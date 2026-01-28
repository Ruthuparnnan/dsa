/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function (nums, queries) {
  nums.sort((a, b) => a - b);

  let sum = 0;
  const prefix = [];

  for (let num of nums) {
    sum += num;
    prefix.push(sum);
  }

  const result = [];

  for (const query of queries) {
    let left = 0;
    let right = prefix.length - 1;
    let ans = -1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (prefix[mid] <= query) {
        ans = mid;
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    result.push(ans + 1);
  }

  return result;
};

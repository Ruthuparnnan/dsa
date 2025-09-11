/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const result = [];

  function backTrack(path) {
    if (path.length === nums.length) {
      result.push([...path]);
      return;
    }

    for (let num of nums) {
      if (path.includes(num)) continue;
      path.push(num);
      backTrack(path);
      path.pop();
    }
  }

  backTrack([]);

  return result;
};

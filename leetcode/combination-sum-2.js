/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  const result = [];
  candidates.sort((a, b) => a - b);

  function backTrack(start, current, total) {
    if (total === target) {
      result.push([...current]);
      return;
    }

    if (total > target) return;

    for (let i = start; i < candidates.length; i++) {
      if (i > start && candidates[i] === candidates[i - 1]) continue;
      current.push(candidates[i]);
      backTrack(i + 1, current, total + candidates[i]);
      current.pop();
    }
  }

  backTrack(0, [], 0);

  return result;
};

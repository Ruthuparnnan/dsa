/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  if (intervals.length === 0) return [];
  intervals = intervals.sort((a, b) => a[0] - b[0]);
  const merged = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const interval = intervals[i];
    const current = merged[merged.length - 1];
    if (current[1] >= interval[0]) {
      merged.pop();
      const end = current[1] > interval[1] ? current[1] : interval[1];
      merged.push([current[0], end]);
    } else {
      merged.push(interval);
    }
  }

  return merged;
};

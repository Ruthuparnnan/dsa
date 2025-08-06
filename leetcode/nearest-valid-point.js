/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function (x, y, points) {
  let index = -1;
  let distance = Infinity;

  for (let i = 0; i < points.length; i++) {
    if (points[i][0] === x || points[i][1] === y) {
      const manhattanDistance =
        Math.abs(x - points[i][0]) + Math.abs(y - points[i][1]);
      if (manhattanDistance < distance) {
        distance = manhattanDistance;
        index = i;
      }
    }
  }
  return index;
};

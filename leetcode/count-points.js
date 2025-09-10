/**
 * @param {string} rings
 * @return {number}
 */
var countPoints = function (rings) {
  const colorMap = new Map();

  let count = 0;

  for (let i = 0; i <= 9; i++) {
    colorMap.set(i, new Set());
  }

  for (let i = 0; i < rings.length; i += 2) {
    const color = rings[i];
    const rod = Number(rings[i + 1]);

    colorMap.get(rod).add(color);
  }

  for (let i = 0; i <= 9; i++) {
    if (colorMap.get(i).size === 3) count++;
  }

  return count;
};

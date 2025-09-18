/**
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function (cost) {
  if (cost.length === 2) return cost[0] + cost[1];
  if (cost.length === 1) return cost[0];
  cost = cost.sort((a, b) => b - a);
  let total = 0;

  for (let i = 0; i < cost.length; i += 3) {
    total += cost[i] + (cost[i + 1] || 0);
  }

  return total;
};

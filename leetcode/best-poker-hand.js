/**
 * @param {number[]} ranks
 * @param {character[]} suits
 * @return {string}
 */
var bestHand = function (ranks, suits) {
  const set = new Set(suits);
  if (set.size === 1) return "Flush";

  const map = new Map();

  for (let rank of ranks) {
    map.set(rank, (map.get(rank) || 0) + 1);
  }

  let max = -Infinity;

  for (let value of map.values()) {
    max = Math.max(value, max);
  }

  if (max >= 3) return "Three of a Kind";
  if (max === 2) return "Pair";
  else return "High Card";
};

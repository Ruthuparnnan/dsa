function equalDominoPairsOptimized(dominoes) {
  const count = {};
  let pairs = 0;

  for (const [a, b] of dominoes) {
    const key = a < b ? `${a},${b}` : `${b},${a}`;
    count[key] = (count[key] || 0) + 1;
  }

  for (const key in count) {
    const n = count[key];
    pairs += (n * (n - 1)) / 2; // Combination of n taken 2
  }

  return pairs;
}

function equalDominoPairs(dominoes) {
  const pairCount = new Map();
  let totalPair = 0;

  // Sort each domino in-place
  dominoes.forEach((elem) => elem.sort((a, b) => a - b));

  // Count normalized pairs
  for (const [a, b] of dominoes) {
    const key = `${a},${b}`;
    pairCount.set(key, (pairCount.get(key) || 0) + 1);
  }

  // Count valid pairs from frequencies
  for (const count of pairCount.values()) {
    if (count > 1) {
      totalPair += (count * (count - 1)) / 2;
    }
  }

  return totalPair;
}

//  Example usage:
const dominoes = [
  [1, 2],
  [1, 2],
  [2, 1],
  [3, 4],
  [3, 4],
  [4, 3],
  [5, 6],
];
const result = equalDominoPairs(dominoes);
console.log(result); // Output: 1

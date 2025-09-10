/**
 * @param {number[]} fruits
 * @param {number[]} baskets
 * @return {number}
 */

function numOfUnplacedFruits(fruits, baskets) {
  const n = baskets.length;
  if (fruits.length !== n)
    throw new Error("fruits and baskets must have equal length");

  // Build segment tree over baskets' capacities
  const size = 1 << Math.ceil(Math.log2(n));
  const tree = new Array(2 * size).fill(-Infinity);

  // Build leaves
  for (let i = 0; i < n; i++) tree[size + i] = baskets[i];
  // Build internal nodes as max
  for (let i = size - 1; i > 0; i--)
    tree[i] = Math.max(tree[i << 1], tree[(i << 1) | 1]);

  // Helper: find leftmost index with value >= val, or -1 if none
  function firstAtLeast(val) {
    // If overall max < val, no candidate
    if (tree[1] < val) return -1;

    let idx = 1;
    let l = 0,
      r = size - 1;
    // Descend to a leaf
    while (l !== r) {
      const mid = (l + r) >> 1;
      const leftIdx = idx << 1;
      if (tree[leftIdx] >= val) {
        // Go left
        idx = leftIdx;
        r = mid;
      } else {
        // Go right
        idx = leftIdx | 1;
        l = mid + 1;
      }
    }
    // If this is outside original n, treat as not found
    return l < n ? l : -1;
  }

  // Helper: point-update index to -Infinity (mark used)
  function invalidate(pos) {
    let i = size + pos;
    tree[i] = -Infinity;
    i >>= 1;
    while (i >= 1) {
      tree[i] = Math.max(tree[i << 1], tree[(i << 1) | 1]);
      i >>= 1;
    }
  }

  let unplaced = 0;
  for (const q of fruits) {
    const idx = firstAtLeast(q);
    if (idx === -1) {
      unplaced++;
    } else {
      invalidate(idx);
    }
  }
  return unplaced;
}

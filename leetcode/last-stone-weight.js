function lastStoneWeight(stones) {
  if (stones.length === 0) return 0;
  if (stones.length === 1) return stones[0];

  stones.sort((a, b) => b - a);
  while (stones.length > 1) {
    const stone1 = stones.shift();
    const stone2 = stones.shift();

    if (stone1 !== stone2) {
      stones.push(stone1 - stone2);
      stones.sort((a, b) => b - a); // Re-sort after each operation
    }
  }

  return stones.length === 0 ? 0 : stones[0];
}

function lastStoneWeightI(stones) {
  if (stones.length === 0) return 0;
  if (stones.length === 1) return stones[0];

  // Use a max heap to always get the two largest stones
  const maxHeap = new MaxHeap(stones);

  while (maxHeap.size() > 1) {
    const stone1 = maxHeap.extractMax();
    const stone2 = maxHeap.extractMax();

    if (stone1 !== stone2) {
      maxHeap.insert(stone1 - stone2);
    }
  }

  return maxHeap.size() === 0 ? 0 : maxHeap.extractMax();
}

function lastStoneWeightII(stones) {
  const totalWeight = stones.reduce((a, b) => a + b, 0);
  const target = Math.floor(totalWeight / 2);
  const dp = Array(target + 1).fill(0);

  for (const stone of stones) {
    for (let j = target; j >= stone; j--) {
      dp[j] = Math.max(dp[j], dp[j - stone] + stone);
    }
  }

  return totalWeight - 2 * dp[target];
}

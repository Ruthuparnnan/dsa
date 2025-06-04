function findJewelsOptimized(stones, jewels) {
  const jewelsSet = new Set(jewels);
  let count = 0;

  for (let char of stones) {
    if (jewelsSet.has(char)) {
      count++;
    }
  }
  return count;
}

function findJewels(stones, jewels) {
  const stonesMap = new Map();

  for (let char of stones) {
    stonesMap.set(char, (stonesMap.get(char) || 0) + 1);
  }

  let count = 0;

  for (let char of jewels) {
    if (stonesMap.has(char)) {
      count += stonesMap.get(char);
    }
  }

  return count;
}

// Test cases
console.log(findJewels("aAAbbbb", "aA")); // Output: 3
console.log(findJewels("z", "ZZ")); // Output: 0

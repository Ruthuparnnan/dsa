function hasGroupSizeX(deck) {
  const countMap = new Map();

  // Step 1: Count frequencies
  for (let card of deck) {
    countMap.set(card, (countMap.get(card) || 0) + 1);
  }

  // Step 2: Compute GCD of all counts
  const counts = Array.from(countMap.values());

  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

  let groupSize = counts[0];
  for (let i = 1; i < counts.length; i++) {
    groupSize = gcd(groupSize, counts[i]);
  }

  // Step 3: Return true if GCD >= 2
  return groupSize >= 2;
}
// Test cases
console.log(hasGroupSizeX([1, 2, 3, 4, 4, 3, 2, 1])); // true
console.log(hasGroupSizeX([1, 1, 2, 2, 2, 2])); // false

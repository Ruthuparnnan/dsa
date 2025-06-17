function uniqueOccurances(arr) {
  const freqMap = new Map();

  // Step 1: Count frequencies
  for (let num of arr) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  // Step 2: Check uniqueness of frequencies
  const seen = new Set();
  for (let freq of freqMap.values()) {
    if (seen.has(freq)) {
      return false;
    }
    seen.add(freq);
  }

  return true;
}

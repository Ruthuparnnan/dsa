var topKFrequent = function (nums, k) {
  // 1️⃣ Count frequencies
  const freqMap = new Map();
  for (let num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  // 2️⃣ Convert map to array
  const arr = Array.from(freqMap.entries());
  // arr = [ [num, freq], [num, freq], ... ]

  // 3️⃣ Sort by frequency (descending)
  arr.sort((a, b) => b[1] - a[1]);

  // 4️⃣ Take first k elements
  const result = [];
  for (let i = 0; i < k; i++) {
    result.push(arr[i][0]);
  }

  return result;
};

function luckyNumber(arr) {
  const freqMap = new Map();
  let largest = -1;

  for (let i = 0; i < arr.length; i++) {
    freqMap.set(arr[i], (freqMap.get(arr[i]) || 0) + 1);
  }

  for (let [num, freq] of freqMap.entries()) {
    if (num === freq && num > largest) {
      largest = num;
    }
  }

  return largest;
}

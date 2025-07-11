function maxPowerOptimized(s) {
  let currentChar = s[0];
  let count = 1;
  let maxCount = 1;

  for (let i = 1; i < s.length; i++) {
    if (s[i] === currentChar) {
      count++;
    } else {
      currentChar = s[i];
      count = 1;
    }
    maxCount = Math.max(maxCount, count);
  }

  return maxCount;
}

function maxPower(s) {
  let currentChar = "";
  let count = 0;
  let maxCount = 1;

  for (let char of s) {
    if (char === currentChar) {
      count++;
      maxCount = Math.max(count, maxCount);
    } else {
      count = 1;
      currentChar = char;
    }
  }

  return maxCount;
}

console.log("dhdh", maxPower("abbcccddddeeeeedcba"));

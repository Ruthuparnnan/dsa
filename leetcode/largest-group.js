function largestGroup(n) {
  const map = new Map();

  for (let i = 1; i <= n; i++) {
    let sum = 0;
    let num = i;
    while (num > 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
    map.set(sum, (map.get(sum) || 0) + 1);
  }

  let result = 0;
  let largest = 0;

  for (let value of map.values()) {
    if (value > largest) {
      largest = value;
      result = 1;
    } else if (value === largest) {
      result++;
    }
  }

  return result;
}

// Example usage;
console.log(largestGroup(13)); // Output:

function arrangeCoinsOptimized(n) {
  let left = 0;
  let right = n;
  let result = 0;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let coinsNeeded = (mid * (mid + 1)) / 2;

    if (coinsNeeded === n) return mid;

    if (coinsNeeded < n) {
      result = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return result;
}


function arrangeCoins(n) {
  let i = 1;
  let rows = 0;

  while (n >= i) {
    n -= i;
    i++;
    rows++;
  }

  return rows;
}

// Test cases
console.log(arrangeCoins(5)); // Output: 2
console.log(arrangeCoins(8)); // Output: 3
console.log(arrangeCoins(0)); // Output: 0

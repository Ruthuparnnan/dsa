function squareRoot(x) {
  if (x < 2) return x;

  let low = 0;
  let high = x;
  let mid = 0;

  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    let midSquared = mid * mid;

    if (midSquared === x) {
      return mid; 
    } else if (midSquared < x) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return high; 
}

console.log(squareRoot(8));

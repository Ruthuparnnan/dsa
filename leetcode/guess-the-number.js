function guessNumber(n) {
  let low = 1;
  let high = n;

  while (high >= low) {
    let mid = Math.floor((low + high) / 2);
    const result = guess(mid);

    if (result === 0) return mid;
    if (result === -1) high = mid - 1;
    if (result === 1) low = mid + 1;
  }

  return -1;
}

function solution(n) {
  let low = 1;
  let high = n;

  while (low < high) {
    let mid = Math.floor((low + high) / 2);
    if (isBadVersion(mid)) {
      high = mid; // Don't skip mid — it might be the first bad version
    } else {
      low = mid + 1;
    }
  }

  return low; // or high — both point to the first bad version now
}

function findSpecialInteger(arr) {
  const n = arr.length;
  const candidates = [
    arr[Math.floor(n / 2)],
    arr[Math.floor(n / 4)],
    arr[Math.floor((3 * n) / 4)],
  ];

  for (let candidate of candidates) {
    const firstIndex = arr.indexOf(candidate);
    const lastIndex = arr.lastIndexOf(candidate);

    if (lastIndex - firstIndex + 1 > n / 4) return candidate;
  }
}

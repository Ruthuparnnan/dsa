function getNoZeroIntegers(n) {
  for (let i = 1; i < n; i++) {
    const a = i;
    const b = n - i;
    if (!String(a).includes("0") && !String(b).includes("0")) {
      return [a, b];
    }
  }
}

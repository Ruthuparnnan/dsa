function sumZero(n) {
  const res = [];

  for (let i = 1; i <= Math.floor(n / 2); i++) {
    res.push(-i, i); // symmetric pairs
  }

  if (n % 2 !== 0) {
    res.push(0); // add 0 for odd length
  }

  return res;
}

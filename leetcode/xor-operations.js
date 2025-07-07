function xorOperation(n, start) {
  let xorValue = start;

  for (let i = 1; i < n; i++) {
    xorValue = xorValue ^ (start + 2 * i);
  }

  return xorValue;
}

console.log(xorOperation(5, 0));

function decrypt(code, k) {
  if (k === 0) return Array.from({ length: code.length }).fill(0);
  const decrypted = [];
  const n = code.length;

  for (let i = 0; i < n; i++) {
    let sum = 0;
    if (k > 0) {
      for (let j = 1; j <= k; j++) {
        sum += code[(i + j) % n];
      }
    } else if (k < 0) {
      for (let j = 1; j <= -k; j++) {
        sum += code[(i - j + n) % n];
      }
    }
    decrypted.push(sum);
  }

  return decrypted;
}

function shortestToChar(s, c) {
  const result = new Array(s.length);
  let prev = -Infinity;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === c) {
      prev = i;
    }
    result[i] = i - prev;
  }

  prev = Infinity;

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === c) {
      prev = i;
    }
    result[i] = Math.min(result[i], prev - i);
  }

  return result;
}

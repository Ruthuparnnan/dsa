function largeGroupPositions(s) {
  let result = [];
  let start = 0;

  for (let i = 0; i <= s.length; i++) {
    if (s.length === i || s[start] !== s[i]) {
      if (i - start >= 3) {
        result.push([start, i - 1]);
      }
      start = i;
    }
  }
  return result;
}

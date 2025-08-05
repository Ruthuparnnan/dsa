function longestNiceSubstring(s) {
  if (s.length < 2) return "";

  const set = new Set(s);
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (set.has(char.toLowerCase()) && set.has(char.toUpperCase())) {
      continue; // this char is fine
    }

    // this char breaks niceness
    const left = longestNiceSubstring(s.slice(0, i));
    const right = longestNiceSubstring(s.slice(i + 1));

    // return the longer of the two
    return left.length >= right.length ? left : right;
  }

  // all chars are nice
  return s;
}

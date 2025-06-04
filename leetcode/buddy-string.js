function buddyStrings(s, goal) {
  if (s.length !== goal.length) return false;

  if (s === goal) {
    const seen = new Set();
    for (let char of s) {
      if (seen.has(char)) return true;
      seen.add(char);
    }
    return false;
  }

  const diff = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== goal[i]) {
      diff.push(i);
    }
  }

  if (diff.length !== 2) return false;

  const [i, j] = diff;
  return s[i] === goal[j] && s[j] === goal[i];
}

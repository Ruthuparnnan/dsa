function wordPatternOptimized(pattern, s) {
  const pts = new Map();
  const stp = new Map();
  const sArray = s.split(" ");

  if (pattern.length !== sArray.length) return false;

  for (let i = 0; i < pattern.length; i++) {
    const p = pattern[i];
    const word = sArray[i];

    if (pts.has(p) && pts.get(p) !== word) return false;
    if (stp.has(word) && stp.get(word) !== p) return false;

    pts.set(p, word);
    stp.set(word, p);
  }

  return true;
}

function wordPattern(pattern, s) {
  let pts = {};
  let stp = {};
  let sArray = s.split(" ");

  if (pattern.length !== sArray.length) return false;

  for (let i = 0; i < pattern.length; i++) {
    if (pts[pattern[i]] && pts[pattern[i]] !== sArray[i]) return false;
    if (stp[sArray[i]] && stp[sArray[i]] !== pattern[i]) return false;
    pts[pattern[i]] = sArray[i];
    stp[sArray[i]] = pattern[i];
  }
  return true;
}
console.log(wordPatternOptimized("abba", "dog cat cat dog"));
console.log(wordPatternOptimized("abba", "dog cat cat fish"));
console.log(wordPatternOptimized("abba", "dog constructor constructor dog"));

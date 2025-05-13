function repeatedSubstringPatternOptimized(s) {
  const n = s.length;
  for (let i = 1; i <= n / 2; i++) {
    const substring = s.slice(0, i);
    const repeatCount = n / i;
    if (Number.isInteger(repeatCount) && substring.repeat(repeatCount) === s) {
      return true;
    }
  }
  return false;
}

function repeatedSubstringPattern(s) {
  return (s + s).slice(1, -1).includes(s);
}

// Test cases
console.log(repeatedSubstringPattern("abab")); // Output: true
console.log(repeatedSubstringPattern("aba")); // Output: false
console.log(repeatedSubstringPattern("abcabcabcabc")); // Output: true

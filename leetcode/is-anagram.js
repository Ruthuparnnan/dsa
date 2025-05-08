function isAnagram(s, t) {
  if (s.length !== t.length) return false;

  const sCount = {};

  for (let char of s) {
    sCount[char] = (sCount[char] || 0) + 1;
  }

  for (let char of t) {
    if (!sCount[char] || sCount[char] === 0) return false;
    sCount[char] = (sCount[char] || 0) - 1;
  }

  return true;
}

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));

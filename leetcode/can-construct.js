function canConstructOptimized(ransomNote, magazine) {
  const magazineCount = {};
  for (let char of magazine) {
    magazineCount[char] = (magazineCount[char] || 0) + 1;
  }

  for (let char of ransomNote) {
    if (!magazineCount[char]) {
      return false;
    }
    magazineCount[char]--;
  }
  return true;
}

function canConstruct(ransomNote, magazine) {
  if (ransomNote.length > magazine.length) return false;
  magazine = [...magazine];
  let i = 0;
  while (i < ransomNote.length) {
    if (magazine.includes(ransomNote[i])) {
      const index = magazine.indexOf(ransomNote[i]);
      magazine.splice(index, 1);
      i++;
    } else {
      return false;
    }
  }

  return true;
}

console.log(canConstruct("a", "b")); // false
console.log(canConstruct("aa", "ab")); // false
console.log(canConstruct("aa", "aab")); // true

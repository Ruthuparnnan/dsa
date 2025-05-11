function firstUniqChar(s) {
  const charCount = {};

  // Count the occurrences of each character
  for (let char of s) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Find the first unique character
  for (let i = 0; i < s.length; i++) {
    if (charCount[s[i]] === 1) {
      return i;
    }
  }

  return -1; // If no unique character is found
}

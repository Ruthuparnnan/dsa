function longestPalindrome(s) {
  const charCount = {};
  let result = 0;
  let isUniquePresent = false;

  for (let char of s) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (let char of Object.values(charCount)) {
    if (char % 2 === 0) {
      result += char;
    } else {
      result += char - 1;
      isUniquePresent = true;
    }
  }

  if (isUniquePresent) {
    result += 1;
  }

  return result;
}

console.log(longestPalindrome("abccccdd")); // 7
console.log(longestPalindrome("a")); // 1

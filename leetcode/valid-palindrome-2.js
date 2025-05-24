function validPalindrome(s) {
  function isPalindrome(str, left, right) {
    while (left < right) {
      if (str[left] !== str[right]) return false;
      left++;
      right--;
    }
    return true;
  }

  let i = 0;
  let j = s.length - 1;

  while (i < j) {
    if (s[i] === s[j]) {
      i++;
      j--;
    } else {
      // Try skipping either s[i] or s[j]
      return isPalindrome(s, i + 1, j) || isPalindrome(s, i, j - 1);
    }
  }

  return true;
}

// Test cases
console.log(validPalindrome("aba")); // Output: true
console.log(validPalindrome("abca")); // Output: true

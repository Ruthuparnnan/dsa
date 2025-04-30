function isPalindrome(s) {
  const cleaned = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
  let i = 0;
  let j = cleaned.length - 1;

  while (i < j) {
    if (cleaned[i] !== cleaned[j]) {
      return false;
    }
    i++;
    j--;
  }

  return true;
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));

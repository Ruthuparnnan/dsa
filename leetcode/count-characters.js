function countCharacters(words, chars) {
  let sum = 0;
  const countMap = new Map();
  for (let char of chars) {
    countMap.set(char, (countMap.get(char) || 0) + 1);
  }

  let canConfirm = true;
  // Iterate through each word and check if it can be formed with the characters in chars

  for (let i = 0; i < words.length; i++) {
    canConfirm = true;
    // Create a frequency map for the current word
    const freqMap = new Map();
    for (let char of words[i]) {
      freqMap.set(char, (freqMap.get(char) || 0) + 1);
    }
    for (let [char, count] of freqMap.entries()) {
      const charCount = countMap.get(char);
      if (!(charCount >= count)) {
        canConfirm = false;
        break;
      }
    }
    if (canConfirm) {
      sum += words[i].length;
    }
  }

  return sum;
}

// Example usage:
console.log(countCharacters(["cat", "bt", "hat", "tree"], "atach")); // Output: 6

function findWordsOptimized(words) {
  const rows = [
    new Set("qwertyuiop"),
    new Set("asdfghjkl"),
    new Set("zxcvbnm"),
  ];

  return words.filter((word) => {
    const lower = word.toLowerCase();
    return rows.some((row) => [...lower].every((ch) => row.has(ch)));
  });
}

function findWords(words) {
  const row1 = new Set([..."qwertyuiop"]);
  const row2 = new Set([..."asdfghjkl"]);
  const row3 = new Set([..."zxcvbnm"]);

  const result = [];

  for (let word of words) {
    if (row1.has(word[0].toLowerCase())) {
      if ([...word.toLowerCase()].every((item) => row1.has(item))) {
        result.push(word);
      }
    } else if (row2.has(word[0].toLowerCase())) {
      if ([...word.toLowerCase()].every((item) => row2.has(item))) {
        result.push(word);
      }
    } else if (row3.has(word[0].toLowerCase())) {
      if ([...word.toLowerCase()].every((item) => row3.has(item))) {
        result.push(word);
      }
    }
  }
  return result;
}

// Test cases
console.log(findWords(["Hello", "Alaska", "Dad", "Peace"])); // Output: ["Alaska", "Dad"]
console.log(findWords(["omk"])); // Output: []
console.log(findWords(["adsdf", "sfd"])); // Output: ["adsdf", "sfd"]

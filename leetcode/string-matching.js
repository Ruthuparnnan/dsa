function stringMatchingOptimized(words) {
  const result = [];

  // Sort by word length (shorter words checked against longer ones only)
  words.sort((a, b) => a.length - b.length);

  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if (words[j].includes(words[i])) {
        result.push(words[i]);
        break; // No need to check further once match is found
      }
    }
  }

  return result;
}

function stringMatching(words) {
  const result = [];

  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words.length; j++) {
      if (words[i] === words[j]) continue;
      if (words[i].includes(words[j])) result.push(words[j]);
    }
  }

  return Array.from(new Set(result));
}

// Example usage;
console.log(stringMatching());

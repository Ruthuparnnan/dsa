function mostCommonWord(paragraph, banned) {
  const cleanedParagraphArray = paragraph
    .toLowerCase()
    .replace(/[^a-z\s]/g, " ")
    .split(/\s+/);
  const bannedSet = new Set(banned);
  const countMap = new Map();

  for (let word of cleanedParagraphArray) {
    if (!bannedSet.has(word)) {
      countMap.set(word, (countMap.get(word) || 0) + 1);
    }
  }

  let maxCount = 0;
  let maxWord = "";

  for (let [word, count] of countMap) {
    if (count > maxCount) {
      maxCount = count;
      maxWord = word;
    }
  }

  return maxWord;
}

console.log(mostCommonWord("a, a, a, a, b,b,b,c, c", ["a"]));

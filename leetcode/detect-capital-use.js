function detectCapitalUse(word) {
  return (
    word === word.toUpperCase() ||
    word === word.toLowerCase() ||
    (word[0] === word[0].toUpperCase() &&
      word.slice(1).toLowerCase() === word.slice(1))
  );
}

console.log(detectCapitalUse("USA"));

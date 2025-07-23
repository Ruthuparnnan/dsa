function reorderSpaces(text) {
  let totalSpaces = 0;

  for (let i = 0; i < text.length; i++) {
    if (text[i] === " ") totalSpaces++;
  }

  const words = text.trim().split(/\s+/);
  const wordsCount = words.length;

  if (wordsCount < 2) return words[0] + " ".repeat(totalSpaces);

  const evenSpace = totalSpaces / (wordsCount - 1);
  const cocient = totalSpaces % (wordsCount - 1);

  let result = "";

  for (let i = 0; i < words.length; i++) {
    result += words[i];
    if (i === words.length - 1) {
      result += " ".repeat(cocient);
    } else {
      result += " ".repeat(evenSpace);
    }
  }

  return result;
}

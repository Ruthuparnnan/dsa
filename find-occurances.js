function findOccurrences(arr, target) {
  text = text.split(" ");
  const result = [];

  for (let i = 0; i < text.length - 2; i++) {
    if (text[i] === first && text[i + 1] === second) result.push(text[i + 2]);
  }

  return result;
}

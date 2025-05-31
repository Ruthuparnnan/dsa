function toGoatLatin(sentence) {
  sentence = sentence.split(" ");
  const vowelSet = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);

  const result = [];

  for (let i = 0; i < sentence.length; i++) {
    if (vowelSet.has(sentence[i][0])) {
      result.push(sentence[i] + "ma" + "a".repeat(i + 1));
    } else {
      const firstChar = sentence[i].slice(0, 1);
      const restChar = sentence[i].slice(1);
      result.push(restChar + firstChar + "ma" + "a".repeat(i + 1));
    }
  }

  return result.join(" ");
}

// Test cases
console.log(toGoatLatin("I speak Goat Latin")); // Output: "Imaa peaksmaaa oatGmaaaa
// console.log(toGoatLatin("The quick brown fox jumped over the lazy dog")); // Output: "heTmaa uickqmaaa

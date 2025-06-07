function isAlienSorted(words, order) {
  const orderMap = new Map();
  for (let i = 0; i < order.length; i++) {
    orderMap.set(order[i], i);
  }

  const compare = (word1, word2) => {
    let i = 0;
    while (i < word1.length && i < word2.length) {
      const char1 = word1[i],
        char2 = word2[i];
      if (char1 !== char2) {
        return orderMap.get(char1) < orderMap.get(char2);
      }
      i++;
    }
    return word1.length <= word2.length; // shorter word should come first
  };

  for (let i = 0; i < words.length - 1; i++) {
    if (!compare(words[i], words[i + 1])) return false;
  }

  return true;
}

console.log(isAlienSorted(["apple", "app"], "abcdefghijklmnopqrstuvwxyz"));

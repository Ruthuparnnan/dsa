function repeatedLetters(words) {
  const count = new Array(26).fill(Infinity);

  for (let word of words) {
    const temp = new Array(26).fill(0);

    for (let char of word) {
      temp[char.charCodeAt(0) - 97]++;
    }

    for (let i = 0; i < 26; i++) {
      count[i] = Math.min(temp[i], count[i]);
    }
  }

  let result = [];

  for (let i = 0; i < 26; i++) {
    while (count[i] > 0) {
      result.push(String.fromCharCode(i + 97));
      count[i]--;
    }
  }

  return result;
}

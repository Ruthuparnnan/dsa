function uncommonWords(s1, s2) {
  s1 = s1.split(" ");
  s2 = s2.split(" ");
  const splittedAndCombinedArray = [...s1, ...s2];
  const freqMap = new Map();

  for (let char of splittedAndCombinedArray) {
    freqMap.set(char, (freqMap.get(char) || 0) + 1);
  }
  const result = [];
  for (let [key, value] of freqMap) {
    if (value === 1) {
      result.push(key);
    }
  }

  return result;
}

// Test cases
console.log(uncommonWords("this apple is sweet", "this apple is sour")); // Output: ["sweet", "sour"]
console.log(uncommonWords("apple apple", "banana")); // Output: ["banana"]

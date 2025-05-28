function shortestCompletingWord(licensePlate, words) {
  // build count map for license plate

  const generateCountMap = (str) => {
    const map = new Map();
    for (let char of str.toLowerCase()) {
      if (/[a-z]/.test(char)) {
        map.set(char, (map.get(char) || 0) + 1);
      }
    }
    return map;
  };

  const licenseMap = generateCountMap(licensePlate);

  // Step 2: Check each word to see if it's a valid completing word
  const isCompletingWord = (word, requiredMap) => {
    const map = new Map();

    for (let char of word.toLowerCase()) {
      map.set(char, (map.get(char) || 0) + 1);
    }

    for (let [char, count] of requiredMap) {
      if ((map.get(char) || 0) < count) {
        return false;
      }
    }
    return true;
  };

  // Step 3: Find the shortest completing word
  let result = null;

  for (let word of words) {
    if (isCompletingWord(word, licenseMap)) {
      if (!result || word.length < result.length) {
        result = word;
      }
    }
  }

  return result;
}

// Test cases
const licensePlate1 = "1s3 PSt";
const words1 = ["step", "steps", "stripe", "stepple"];
console.log(shortestCompletingWord(licensePlate1, words1)); // Output: "steps"

function firstNonRepeatingCharacter(string) {
  let count = {};
  let nonRepeatingChar = null;
  const array = Array.from(string);
  for (let i = 0; i < array.length; i++) {
    if (!count[array[i]]) {
      count[array[i]] = 1;
    } else {
      count[array[i]] = count[array[i]] + 1;
    }
  }

  for (let elem of array) {
    if (count[elem] === 1) {
      nonRepeatingChar = elem;
      break;
    }
  }

  return nonRepeatingChar;
}
console.log(firstNonRepeatingCharacter("abacabad")); // "c"

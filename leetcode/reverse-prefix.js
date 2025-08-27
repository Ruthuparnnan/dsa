/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function (word, ch) {
  let index;

  for (let i = 0; i < word.length; i++) {
    if (word[i] === ch) {
      index = i;
      break;
    }
  }

  if (index === undefined) return word;

  word = word.split("");

  const firstHalf = word.slice(0, index + 1); // include 'ch'
  const secondHalf = word.slice(index + 1);

  return firstHalf.reverse().join("") + secondHalf.join("");
};

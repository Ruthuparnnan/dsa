/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function (key, message) {
  const map = new Map();
  let nextCharCode = 97; // ASCII for 'a'

  // Build substitution map
  for (let ch of key) {
    if (ch !== " " && !map.has(ch)) {
      map.set(ch, String.fromCharCode(nextCharCode));
      nextCharCode++;
    }
  }

  // Decode the message
  let result = "";
  for (let m of message) {
    if (m === " ") {
      result += " ";
    } else {
      result += map.get(m);
    }
  }

  return result;
};

console.log(
  decodeMessage(
    "the quick brown fox jumps over the lazy dog",
    "vkbs bs t suepuv"
  )
);

/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function (words) {
  const n = words.length;
  const masks = new Array(n);
  const lengths = new Array(n);

  for (let i = 0; i < n; i++) {
    let mask = 0;

    for (let char of words[i]) {
      mask |= 1 << (char.charCodeAt(0) - 97);
    }

    masks[i] = mask;
    lengths[i] = words[i].length;
  }

  let max = 0;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if ((masks[i] & masks[j]) === 0) {
        max = Math.max(max, lengths[i] * lengths[j]);
      }
    }
  }

  return max;
};

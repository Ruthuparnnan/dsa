var rearrangeCharacters = function (s, target) {
  const sCount = {};
  const tCount = {};

  // Count frequency of s
  for (let ch of s) {
    sCount[ch] = (sCount[ch] || 0) + 1;
  }

  // Count frequency of target
  for (let ch of target) {
    tCount[ch] = (tCount[ch] || 0) + 1;
  }

  let result = Infinity;

  // Find limiting character
  for (let ch in tCount) {
    if (!sCount[ch]) return 0; // missing required char
    result = Math.min(result, Math.floor(sCount[ch] / tCount[ch]));
  }

  return result;
};

function uniqueMorse(words) {
  let morseCodes = [
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--..",
  ];

  const set = new Set();

  for (const word of words) {
    let transformation = "";

    for (let char of word) {
      transformation += morseCodes[char.charCodeAt(0) - 97];
    }
    set.add(transformation);
  }

  return set.size;
}

function freqAlphabets(s) {
  let result = "";
  let i = 0;
  while (i < s.length) {
    if (s[i + 2] !== "#") {
      result += String.fromCharCode(96 + Number(s[i]));
      i++;
    } else {
      const char = s.slice(i, i + 2);
      result += String.fromCharCode(96 + Number(char));
      i += 3;
    }
  }
  return result;
}

// Example usage:
console.log(freqAlphabets("1326#")); // Output: "jkab"

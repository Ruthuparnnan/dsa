function modifyStringOptimized(s) {
  const n = s.length;
  const chars = s.split("");

  for (let i = 0; i < n; i++) {
    if (chars[i] === "?") {
      for (let j = 0; j < 26; j++) {
        const replacement = String.fromCharCode("a".charCodeAt(0) + j);
        if (
          (i === 0 || chars[i - 1] !== replacement) &&
          (i === n - 1 || chars[i + 1] !== replacement)
        ) {
          chars[i] = replacement;
          break;
        }
      }
    }
  }

  return chars.join("");
}

function modifyString(s) {
  s = s.split("");
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "?") {
      let newChar = "";
      let code = 97;
      while (!newChar) {
        const cond1 = s[i - 1] ? code !== s[i - 1].charCodeAt(0) : true;
        const cond2 = s[i + 1] ? code !== s[i + 1].charCodeAt(0) : true;
        if (cond1 && cond2) {
          newChar = String.fromCharCode(code);
        } else {
          code++;
        }
      }
      s[i] = newChar;
    }
  }

  return s.join("");
}

console.log(modifyString("?zs"));

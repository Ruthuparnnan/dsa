function fasterReverseVowels(s) {
  const vowels = "aeiouAEIOU";
  let i = 0;
  let j = s.length - 1;
  s = s.split("");

  while (i < j) {
    if (vowels.indexOf(s[i]) === -1) {
      i++;
      continue;
    }
    if (vowels.indexOf(s[j]) === -1) {
      j--;
      continue;
    }

    [s[i], s[j]] = [s[j], s[i]];
    i++;
    j--;
  }

  return s.join("");
}

function reverseVowels(s) {
  let i = 0;
  let j = s.length - 1;
  s = s.split("");

  while (i < j) {
    if (!/^[aeiou]$/i.test(s[i])) {
      i++;
      continue;
    }
    if (!/^[aeiou]$/i.test(s[j])) {
      j--;
      continue;
    }

    [s[i], s[j]] = [s[j], s[i]];
    i++;
    j--;
  }

  return s.join("");
}

console.log(reverseVowels("hello")); // "holle"
console.log(reverseVowels("leetcode")); // "leotcede"
console.log(reverseVowels("aA")); // "Aa"

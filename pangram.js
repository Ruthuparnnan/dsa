function pangramChecker(str) {
  const array = new Array(26).fill(false);
  let index;
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= "A" && str[i] <= "Z") {
      index = str.charCodeAt(i) - "A".charCodeAt(0);
    } else if (str[i] >= "a" && str[i] <= "z") {
      index = str.charCodeAt(i) - "a".charCodeAt(0);
    } else continue;

    array[index] = true;
  }

  for (let i = 0; i < array.length; i++) {
    if (!array[i]) return false;
  }

  return true;
}

console.log(pangramChecker("The quick brown fox jumps over the lazy dog"));

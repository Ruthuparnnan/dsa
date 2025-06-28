function reorderString(s) {
  const array = new Array(26).fill(0);
  let result = "";

  for (let i = 0; i < s.length; i++) {
    array[s[i].charCodeAt(0) - 97]++;
  }

  while (result.length < s.length) {
    // increasing
    for (let i = 0; i < 26; i++) {
      if (array[i] > 0) {
        result += String.fromCharCode(i + 97);
        array[i]--;
      }
    }

    //    decreasing
    for (let i = 25; i>= 0; i--) {
      if (array[i] > 0) {
        result += String.fromCharCode(i + 97);
        array[i]--;
      }
    }
  }

  return result;
}

console.log(reorderString("aaacbac"));

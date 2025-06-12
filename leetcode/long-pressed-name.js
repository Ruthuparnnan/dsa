function longPressedName(name, typed) {
  let i = 0;
  let j = 0;
  while (i < name.length && j < typed.length) {
    if (name[i] === typed[j]) {
      i++;
      j++;
    } else if (j === 0 || typed[j] !== typed[j - 1]) {
      return false;
    } else {
      j++;
    }
  }
  return i === name.length;
}

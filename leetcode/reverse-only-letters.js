function reverseOnlyLetters(s) {
  const letters = s.match(/[a-zA-Z]/g);
  return s.replace(/[a-zA-Z]/g, () => letters.pop());
}

console.log(reverseOnlyLetters("ab-cd"));
function lengthOfLastWordBF(s) {
  const array = s.trim().split(" ");
  return array[array.length - 1].length;
}
console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("   fly me   to   the moon  "));
console.log(lengthOfLastWord("i love u         "));

function lengthOfLastWord(s) {
    let length = 0;
    let i = s.length - 1;
  
    // Skip any trailing spaces
    while (i >= 0 && s[i] === ' ') {
      i--;
    }
  
    // Count the length of the last word 
    while (i >= 0 && s[i] !== ' ') {
      length++;
      i--;
    }
  
    return length;
  }
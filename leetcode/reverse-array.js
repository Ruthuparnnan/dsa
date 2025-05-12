function reverseArray(s) {
  let i = 0;
  let j = s.length - 1;

  while (i < j) {
    if (s[i] !== s[j]) {
      [s[i], s[j]] = [s[j], s[i]];
    }
    i++;
    j--;
  }
}

console.log(reverseArray([1, 2, 3, 4, 5, 6])); // [5,4,3,2,1]

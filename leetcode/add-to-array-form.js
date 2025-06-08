function addToArrayForm(num, k) {
  const result = [];
  let i = num.length - 1;

  while (i >= 0 || k > 0) {
    if (i >= 0) {
      k += num[i]; // add current digit
      i--;
    }

    result.push(k % 10); // store current digit
    k = Math.floor(k / 10); // carry over
  }

  return result.reverse();
}

console.log(
  addToArrayForm(
    [1, 2, 6, 3, 0, 7, 1, 7, 1, 9, 7, 5, 6, 6, 4, 4, 0, 0, 6, 3],
    516
  )
);

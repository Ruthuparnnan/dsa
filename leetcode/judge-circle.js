function judgeCircle(moves) {
  const count = { U: 0, D: 0, L: 0, R: 0 };
  for (let move of moves) {
    count[move]++;
  }
  return count.U === count.D && count.L === count.R;
}

// Test cases
console.log(judgeCircle("UD")); // Output: true
console.log(judgeCircle("LL")); // Output: false

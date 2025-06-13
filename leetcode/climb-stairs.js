function climbStairs(n) {
  if (n === 1) return 1;
  if (n === 2) return 2;

  let prev1 = 2; // ways to reach step n-1
  let prev2 = 1; // ways to reach step n-2
  let current = 0;

  for (let i = 3; i <= n; i++) {
    current = prev1 + prev2; // ways to reach step i
    prev2 = prev1; // update prev2 to previous prev1
    prev1 = current; // update prev1 to current
  }

  return current;
}

console.log(climbStairs(5));
console.log(climbStairs(4));
console.log(climbStairs(3));
console.log(climbStairs(2));
console.log(climbStairs(1));
console.log(climbStairs(0));

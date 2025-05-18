function fibonacciByDP(n) {
  let a = 1;
  let b = 1;

  for (let i = 3; i <= n; i++) {
    let temp = a + b;

    a = b;
    b = temp;
  }

  return b;
}

function fibonacciOptimized(n) {
  const dp = [0, 1];
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}
function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}
console.log(fibonacciByDP(10));

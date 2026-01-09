/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
var nthSuperUglyNumber = function (n, primes) {
  const k = primes.length;

  const ugly = new Array(n).fill(0);
  const idx = new Array(k).fill(0);

  ugly[0] = 1;

  for (let i = 1; i < n; i++) {
    let nextUgly = Infinity;

    for (let j = 0; j < k; j++) {
      nextUgly = Math.min(nextUgly, primes[j] * ugly[idx[j]]);
    }

    ugly[i] = nextUgly;

    for (let j = 0; j < k; j++) {
      if (primes[j] * ugly[idx[j]] === nextUgly) idx[j]++;
    }
  }

  return ugly[n - 1];
};

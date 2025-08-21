/**
 * @param {number} n
 * @return {boolean}
 */
var isThree = function (n) {
  const p = Math.floor(Math.sqrt(n));

  if (p * p !== n) return false;

  function isPrime(p) {
    if (p <= 1) return false;
    if (p <= 3) return true;

    if (p % 2 === 0 || p % 3 === 0) return false;

    for (let i = 5; i * i <= p; i += 6) {
      if (p % i === 0 || p % (i + 2) === 0) return false;
    }

    return true;
  }

  return isPrime(p);
};

function isPowerOfTwoOptimized(n) {
  return n > 0 && (n & (n - 1)) === 0;
}
// Explanation:
// A power of two in binary has exactly one 1 bit. Example:

// 2 → 10

// 4 → 100

// 8 → 1000

// Subtracting 1 flips all the bits after that 1, so n & (n - 1) becomes 0 only if n is a power of two.

function isPowerOfTwo(n) {
  if (n <= 0) return false;

  while (n % 2 === 0) {
    n /= 2;
  }

  return n === 1;
}

console.log(isPowerOfTwo(16));
console.log(isPowerOfTwo(64));
console.log(isPowerOfTwo(5));

function isPrime(num) {
  if (num < 2) {
    return false;
  }

  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
}

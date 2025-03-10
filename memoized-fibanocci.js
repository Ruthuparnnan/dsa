const cache = {};
function memoizedRecursionOfFibonacci(num) {
  if (num in cache) return cache[num];

  if (num < 2) {
    return 1;
  }
  cache[num] =
    memoizedRecursionOfFibonacci(num - 2) +
    memoizedRecursionOfFibonacci(num - 1);

  return cache[num];
}

console.log(memoizedRecursionOfFibonacci(4));

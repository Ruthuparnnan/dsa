function isPowerOfTwo(num) {
  if (num <= 0) {
    return false;
  }
  while (num % 2 === 0) {
    num = num / 2;
    if (num === 1) return true;
  }
  return false;
}

function recursiveFunction(num) {
  if (num <= 0) {
    return false;
  }
  if (num === 1) return true;
  if (num % 2 === 0) {
    return recursiveFunction(num / 2);
  } else {
    return false;
  }
}

console.log(recursiveFunction(12));

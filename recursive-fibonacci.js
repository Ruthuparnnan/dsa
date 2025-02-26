function recursiveFunction(num) {
  if (num < 2) {
    return num;
  }
  return recursiveFunction(num - 1) + recursiveFunction(num - 2);
}

console.log(recursiveFunction(6));

function minOperations() {
  const stack = [];

  for (let log of logs) {
    if (log === "../") {
      stack.pop();
    } else if (log === "./") {
    } else {
      stack.push(log);
    }
  }

  const result = stack.length;

  return result;
}

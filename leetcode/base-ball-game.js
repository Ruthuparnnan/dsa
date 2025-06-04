function calPoints(operations) {
  const stack = [];

  for (let opr of operations) {
    if (!isNaN(opr)) {
      stack.push(Number(opr));
    } else if (opr === "+") {
      const last = stack[stack.length - 1];
      const secondLast = stack[stack.length - 2];
      stack.push(last + secondLast);
    } else if (opr === "D") {
      stack.push(stack[stack.length - 1] * 2);
    } else if (opr === "C") {
      stack.pop();
    }
  }

  return stack.reduce((acc, elem) => acc + elem, 0);
}

// Test cases
const operations1 = ["5", "2", "C", "D", "+"];
console.log(calPoints(operations1));

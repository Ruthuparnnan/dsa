function countAndSay(n) {
  if (n === 1) return "1"; // base case

  // get the previous string
  const prev = countAndSay(n - 1);

  // now process `prev` to generate the current string
  let result = "";
  let count = 1;

  for (let i = 0; i < prev.length; i++) {
    if (i + 1 < prev.length && prev[i] === prev[i + 1]) {
      count++;
    } else {
      result += count.toString() + prev[i];
      count = 1;
    }
  }

  return result;
}


console.log(countAndSay(1))
console.log(countAndSay(2))
console.log(countAndSay(3))
console.log(countAndSay(4))
console.log(countAndSay(10))
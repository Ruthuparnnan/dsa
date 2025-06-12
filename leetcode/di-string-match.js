function diStringMatch(s) {
  let low = 0;
  let high = s.length;
  let result = [];

  for (let char of s) {
    if (char === "I") {
      result.push(low++);
    } else {
      result.push(high--);
    }
  }

  result.push(low);

  return result;
}

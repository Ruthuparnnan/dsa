var makeFancyString = function (s) {
  const result = [];
  let count = 0;
  let prev = "";

  for (let char of s) {
    if (char === prev) {
      count++;
    } else {
      count = 1;
      prev = char;
    }
    if (count <= 2) {
      result.push(char);
    }
  }

  return result.join("");
};

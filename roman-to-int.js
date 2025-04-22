function romanToInt(s) {
  const romanToIntMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result = 0;
  let skip = false;

  const array = Array.from(s);
  for (let i = 0; i < array.length; i++) {
    if (skip) continue;
    if (array[i] === "I" && array[i + 1] === "V") {
      result += 4;
      skip = true;
      continue;
    }
    if (array[i] === "I" && array[i + 1] === "X") {
      result += 9;
      skip = true;
      continue;
    }
    if (array[i] === "X" && array[i + 1] === "L") {
      result += 40;
      skip = true;
      continue;
    }
    if (array[i] === "X" && array[i + 1] === "C") {
      result += 90;
      skip = true;
      continue;
    }
    if (array[i] === "C" && array[i + 1] === "D") {
      result += 400;
      skip = true;
      continue;
    }
    if (array[i] === "C" && array[i + 1] === "M") {
      result += 900;
      skip = true;
      continue;
    }
    result += romanToIntMap[array[i]];
    skip = false;
  }

  return result;
}

console.log(romanToInt("III")); // 3
console.log(romanToInt("IV")); // 4
console.log(romanToInt("XL"))

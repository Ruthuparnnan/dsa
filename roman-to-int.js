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

function romanToIntOptimized(string) {
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

  for (let i = 0; i < string.length; i++) {
    let currentValue = romanToIntMap[string[i]];
    let nextValue = romanToIntMap[string[i + 1]];
    if (currentValue < nextValue) {
      result += nextValue - currentValue;
      i++;
    } else {
      result += currentValue;
    }
  }

  return result;
}

console.log(romanToIntOptimized("III")); // 3
console.log(romanToIntOptimized("IV")); // 4
console.log(romanToIntOptimized("XL")); // 40
console.log(romanToIntOptimized("MCMXCIV")); // 1994

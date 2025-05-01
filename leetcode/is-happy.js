function isHappyOptimized(n) {
  const set = new Set();

  while (n !== 1) {
    if (set.has(n)) return false;
    set.add(n);

    let sum = 0;
    while (n > 0) {
      let digit = n % 10;
      sum += digit * digit;
      n = Math.floor(n / 10);
    }

    n = sum;
  }

  return true;
}

function isHappy(n) {
  if (!n || n === 0) return false;

  const set = new Set();

  while (n !== 1) {
    if (set.has(n)) return false;
    set.add(n);

    let sum = 0;
    let numStr = n.toString();

    for (const digit of numStr) {
      sum += Number(digit) ** 2;
    }

    n = sum;
  }

  return true;
}
console.log(isHappy(19));

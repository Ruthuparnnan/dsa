function selfDividingNumbers(left, right) {
  let result = [];

  for (let i = left; i <= right; i++) {
    let temp = i;

    let isDivisible = true;

    while (temp > 0) {
      let digit = temp % 10;
      if (digit === 0 || i % digit !== 0) {
        isDivisible = false;
        break;
      }
      temp = Math.floor(temp / 10);
    }

    if (isDivisible) {
      result.push(i);
    }
  }

  return result;
}

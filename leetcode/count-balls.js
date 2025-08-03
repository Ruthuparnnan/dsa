function countBalls(lowLimit, highLimit) {
  const n = highLimit - lowLimit + 1;
  const freq = new Map();
  let highestCount = 0;
  for (let i = lowLimit; i <= highLimit; i++) {
    let sum = 0;
    let num = i;

    while (num > 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }

    const currentValuecount = freq.get(sum) || 0;

    freq.set(sum, currentValuecount + 1);
    if (currentValuecount + 1 > highestCount)
      highestCount = currentValuecount + 1;
  }

  return highestCount;
}

console.log(countBalls(5, 15));

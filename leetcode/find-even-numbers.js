function findEvenNumbers(nums) {
  let count = 0;

  for (let num of nums) {
    let digits = 0;

    while (num > 0) {
      digits++;
      num = Math.floor(num / 10);
    }

    if (digits === 3 && num % 2 === 0) {
      count++;
    }
  }

  return count;
}

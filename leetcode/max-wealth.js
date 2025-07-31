function maxWealth(accounts) {
  let maxWealth = 0;

  for (let account of accounts) {
    const currentTotal = account.reduce((acc, curr) => acc + curr, 0);
    maxWealth = Math.max(currentTotal, maxWealth);
  }

  return maxWealth;
}

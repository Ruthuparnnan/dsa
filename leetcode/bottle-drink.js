function bottleDrinked(numBottles, numExchange) {
  let totalDrinked = numBottles;

  while (numBottles > numExchange - 1) {
    const count = Math.floor(numBottles / numExchange);
    const cocient = numBottles % numExchange;
    totalDrinked += count;
    numBottles = count + cocient;
  }

  return totalDrinked;
}

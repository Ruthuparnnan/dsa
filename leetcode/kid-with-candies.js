function kidWithCandies(candies, extraCandies) {
  let largest = 0;

  for (let num of candies) {
    largest = Math.max(num, largest);
  }

  return candies.map((candy) => {
    return candy + extraCandies >= largest;
  });
}

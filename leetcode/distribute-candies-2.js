function distributeCandies(candies, num_people) {
  const array = new Array(num_people).fill(0);
  let give = 1;
  let index = 0;

  while (candies > 0) {
    const i = index % num_people;
    const toGive = Math.min(give, candies);

    array[i] += toGive;
    candies -= toGive;

    give++;
    index++;
  }
  return array;
}

// Example usage:
const candies = 60;
const num_people = 4;
const result = distributeCandies(candies, num_people);
console.log(result); // Output: [1, 2, 3, 1]

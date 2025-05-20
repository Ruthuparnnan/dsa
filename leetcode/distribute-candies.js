function distributeCandies(candyType) {
  const uniqueCandies = new Set(candyType);
  const maxAllowed = Math.floor(candyType.length / 2);
  return Math.min(uniqueCandies.size, maxAllowed);
}

const candyType = [1, 1, 2, 2, 3, 3];
const result = distributeCandies(candyType);
console.log(result); // Output: 3

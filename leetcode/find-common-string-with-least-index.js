function findRestaurant(list1, list2) {
  const map = new Map();
  let leastSum = Infinity;
  let result = [];

  for (let i = 0; i < list1.length; i++) {
    map.set(list1[i], i);
  }

  for (let j = 0; j < list2.length; j++) {
    const str = list2[j];
    if (map.has(str)) {
      const i = map.get(str);
      const sum = i + j;

      if (sum < leastSum) {
        result = [str];
        leastSum = sum;
      } else if (sum === leastSum) {
        result.push(str);
      }
    }
  }

  return result;
}

// Test cases
console.log(
  findRestaurant(
    ["Shogun", "Tapioca Express", "Burger King", "KFC"],
    [
      "Piatti",
      "The Grill at Torrey Pines",
      "Hungry Hunter Steakhouse",
      "Shogun",
    ]
  )
);

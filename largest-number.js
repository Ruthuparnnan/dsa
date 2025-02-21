const largestNumFinder = (array) => {
  let largestNum = 0;
  array.forEach((element) => {
    element > largestNum ? (largestNum = element) : null;
  });
  return largestNum;
};

console.log(largestNumFinder([1, 2, 3, 4, 8]));

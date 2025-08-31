/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function (s) {
  const array = s
    .split(" ")
    .filter(Number)
    .map((item) => Number(item));
  for (let i = 0; i < array.length; i++) {
    if (i > 0 && array[i] <= array[i - 1]) return false;
  }

  return true;
};

console.log(areNumbersAscending("a puppy has 2 eyes 4 legs"));

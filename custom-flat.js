const array = [1, 2, 3, 4, [5, 6, [7, 8]]];

const customFlat = (arr, depth = 1) => {
  let result = [];
  array.forEach((element) => {
    if (Array.isArray(element)) {
      customFlat(element);
    } else {
      result.push(element);
    }
  });

  return result;
};

console.log(customFlat(array));

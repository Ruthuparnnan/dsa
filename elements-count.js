const array = [1, [2, [3, [4, [5, 6]]]]];

const getLength = (arr) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      count += getLength(arr[i]);
    } else {
      count++;
    }
  }
  return count;
};

console.log(getLength(array));

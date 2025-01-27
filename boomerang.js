// input [3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2]
// ouput [3, 7, 3], [1, 5, 1], [2, -2, 2]

function boomerang(array) {
  let output = [];

  for (let i = 0; i < array.length - 2; i++) {
    if (array[i] !== array[i + 1] && array[i] === array[i + 2]) {
      output.push([array[i], array[i + 1], array[i + 2]]);
    }
  }

  return output;
}

console.log(boomerang([3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2]));

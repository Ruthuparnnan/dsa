function cartesianProduct(arr) {
  return arr.reduce((a, b) => a.flatMap((d) => b.map((e) => [d, e].flat())));
}

console.log(
  cartesianProduct([
    [1, 2],
    [3, 4],
    [5, 6],
  ])
); // [ [ 1, 3, 5 ], [ 1, 3, 6 ], [ 1, 4, 5 ], [ 1, 4, 6 ], [ 2, 3, 5 ], [ 2, 3, 6 ], [ 2, 4, 5 ], [ 2, 4, 6 ] ]

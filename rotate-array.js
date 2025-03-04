function rotateArray(array, cycle) {
  let result = array.slice();
  const subArray = result.splice(-cycle);
  result.unshift(...subArray);
  return result;
}

console.log(rotateArray([1, 2, 3, 4, 5], 2));

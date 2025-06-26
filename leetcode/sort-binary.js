function sortByBinary(arr) {
  const countOnes = (s) => s.toString(2).split("1").length - 1;

  return arr.sort((a, b) => {
    const aCount = countOnes(a);
    const bCount = countOnes(b);

    return aCount === bCount ? a - b : aCount - bCount;
  });
}

console.log(sortByBinary());

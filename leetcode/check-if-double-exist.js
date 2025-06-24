function checkIfDoubleExist(arr) {
  const seen = new Set();

  for (let num of arr) {
    if (seen.has(num * 2) || seen.has(num / 2)) return true;
    seen.add(num);
  }

  return false;
}

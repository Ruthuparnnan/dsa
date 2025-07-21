function timeMean(arr) {
  arr.sort((a, b) => a - b);
  const cut = Math.floor(arr.length * 0.05);
  const trimmedArr = arr.slice(cut, arr.length - cut);

  const sum = trimmedArr.reduce((acc, elem) => acc + elem);

  return sum / trimmedArr.length;
}

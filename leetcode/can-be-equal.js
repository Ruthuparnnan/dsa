function canBeEqual(target, arr) {
  if (target.length !== arr.length) return false;

  const countMap = new Map();

  for (let char of target) {
    countMap.set(char, (countMap.get(char) || 0) + 1);
  }

  for (let num of arr) {
    const count = countMap.get(num);
    if (!count || count < 1) return false;
    countMap.set(num, count - 1);
  }

  return true;
}

function isPerfectSqaure(num) {
  let left = 0;
  let right = num;

  while (right >= left) {
    let mid = Math.floor((left + right) / 2);
    if (mid * mid === num) return true;
    if (mid * mid > num) right = mid - 1;
    if (mid * mid < num) left = mid + 1;
  }

  return false;
}

console.log(isPerfectSqaure(16)); // true
console.log(isPerfectSqaure(14)); // false

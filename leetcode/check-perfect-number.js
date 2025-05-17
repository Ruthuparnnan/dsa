function checkPerfectNumberOptimized(num) {
  if (num <= 1) return false;

  let sum = 1;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      sum += i + num / i;
    }
  }

  return sum === num;
}
function checkPerfectNumber(num) {
  let mid = Math.floor(num / 2);
  let total = 0;

  while (mid >= 1) {
    if (num % mid === 0) {
      total += mid;
    }
    mid--;
  }

  return total === num;
}

console.log(checkPerfectNumber(28));
console.log(checkPerfectNumber(7));

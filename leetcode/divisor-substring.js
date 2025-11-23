/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var divisorSubstrings = function (num, k) {
  const str = String(num); // convert only once
  let beauty = 0;

  for (let i = 0; i <= str.length - k; i++) {
    const sub = Number(str.slice(i, i + k)); // substring as number
    if (sub !== 0 && num % sub === 0) {
      // avoid division by zero
      beauty++;
    }
  }

  return beauty;
};

console.log(divisorSubstrings(430043, 2));

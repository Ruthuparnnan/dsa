/**
 * @param {number} n
 * @return {number}
 */
var lastRemaining = function (n) {
  if (n > -2 && n < 2) return n;

  let step = 1;
  let head = 1;
  let remaining = n;
  let left = true;

  while (remaining > 1) {
    if (left || remaining % 2 === 1) {
      head += step;
    }

    step *= 2;
    remaining = Math.floor(remaining / 2);
    left = !left;
  }

  return head;
};

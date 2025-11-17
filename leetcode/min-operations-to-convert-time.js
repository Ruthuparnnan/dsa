/**
 * @param {string} current
 * @param {string} correct
 * @return {number}
 */
var convertTime = function (current, correct) {
  const currentHour = Number(current[0] + current[1]);
  const currentMinutes = Number(current[3] + current[4]);

  const correctHour = Number(correct[0] + correct[1]);
  const correctMinutes = Number(correct[3] + correct[4]);

  const totalCurrentMinutes = currentHour * 60 + currentMinutes;

  const totalCorrectMinutes = correctHour * 60 + correctMinutes;

  let diff = totalCorrectMinutes - totalCurrentMinutes;

  const steps = [60, 15, 5, 1];

  let ops = 0;

  for (let step of steps) {
    ops += Math.floor(diff / step);
    diff = diff % step;
  }

  return ops;
};

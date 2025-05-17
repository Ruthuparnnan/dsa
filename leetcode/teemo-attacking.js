// function teemoAttacking(timeSeries, duration) {
//   let totalTime = 0;
//   for (let i = 0; i < timeSeries.length; i++) {
//     if (
//       i === timeSeries.length - 1 ||
//       timeSeries[i + 1] - timeSeries[i] >= duration
//     ) {
//       totalTime += duration;
//     } else {
//       totalTime += timeSeries[i + 1] - timeSeries[i];
//     }
//   }
//   return totalTime;
// }

function teemoAttacking(timeSeries, duration) {
  if (timeSeries.length === 0) {
    return 0;
  }
  let result = 0;

  for (let i = 1; i < timeSeries.length; i++) {
    if (timeSeries[i] < timeSeries[i - 1] + duration) {
      result += Math.min(duration, timeSeries[i] - timeSeries[i - 1]);
    } else {
      result += duration;
    }
  }
  return result + duration;
}

// Test cases
console.log(teemoAttacking([1, 4], 2)); // Output: 4
console.log(teemoAttacking([1, 2], 2)); // Output: 3
console.log(teemoAttacking([1, 2, 3, 4], 2)); // Output: 4

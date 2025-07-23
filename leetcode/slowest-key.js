var slowestKey = function (releaseTimes, keysPressed) {
  let key = keysPressed[0];
  let maxTime = releaseTimes[0];

  for (let i = 1; i < keysPressed.length; i++) {
    if (releaseTimes[i] - releaseTimes[i - 1] > maxTime) {
      maxTime = releaseTimes[i] - releaseTimes[i - 1];
      key = keysPressed[i];
    } else if (releaseTimes[i] - releaseTimes[i - 1] === maxTime) {
      if (key < keysPressed[i]) {
        key = keysPressed[i];
      }
    }
  }

  return key;
};

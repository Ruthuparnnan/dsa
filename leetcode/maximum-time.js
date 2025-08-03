/** * @param {string} time * @return {string} */
var maximumTime = function (time) {
  time = time.split("");
  for (let i = 0; i < 2; i++) {
    if (time[i] === "?") {
      if (i === 0) {
        if (Number(time[1]) > 3) {
          time[i] = "1";
        } else {
          time[i] = "2";
        }
      } else {
        if (time[0] === "2") {
          time[i] = 3;
        } else {
          time[i] = 9;
        }
      }
    }
  }
  for (let i = 3; i < 5; i++) {
    if (time[i] === "?") {
      if (i === 3) {
        time[i] = 5;
      } else {
        time[i] = 9;
      }
    }
  }
  return time.join("");
};

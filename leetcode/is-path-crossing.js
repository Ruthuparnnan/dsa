function isPathCrossing(path) {
  let x = 0,
    y = 0;
  const seen = new Set();

  for (let char of path) {
    seen.add(`${x},${y}`);
    if (char === "N") {
      y++;
    } else if (char === "S") {
      y--;
    } else if (char === "E") {
      x++;
    } else if (char === "W") {
      x--;
    }
    if (seen.has(`${x},${y}`)) return true;
  }

  return false;
}

function isStraightLine(coordinates) {
  const [x1, y1] = coordinates[0];
  for (let i = 1; i < coordinates.length - 1; i++) {
    const [x2, y2] = coordinates[i + 1];
    const [x3, y3] = coordinates[i];

    if (!((y2 - y1) * (x3 - x2) === (y3 - y2) * (x2 - x1))) return false;
  }

  return true;
}

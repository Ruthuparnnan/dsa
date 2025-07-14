function mostVisitedSector(rounds) {
  const start = rounds[0];
  const end = rounds[rounds.length - 1];
  const result = [];

  if (start <= end) {
    for (i = start; i <= end; i++) {
      result.push(i);
    }
  } else {
    for (i = 1; i <= end; i++) {
      result.push(i);
    }
    for (i = start; i <= n; i++) {
      result.push(i);
    }
  }

  return result;
}

function destCityOptimized(paths) {
  const starts = new Set(paths.map((path) => path[0]));

  for (let [, to] of paths) {
    if (!starts.has(to)) return to;
  }
}

function destCity(paths) {
  const pathMap = new Map();

  for (let path of paths) {
    pathMap.set(path[0], path[1]);
  }

  for (let path of paths) {
    if (!pathMap.has(path[1])) return path[1];
  }
}

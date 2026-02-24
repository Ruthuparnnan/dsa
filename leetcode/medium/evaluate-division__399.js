/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {
  const graph = new Map();

  for (let i = 0; i < equations.length; i++) {
    const [a, b] = equations[i];
    const val = values[i];

    if (!graph.has(a)) graph.set(a, []);
    if (!graph.has(b)) graph.set(b, []);

    graph.get(a).push([b, val]);
    graph.get(b).push([a, 1 / val]);
  }

  const dfs = (src, dst, visited) => {
    if (!graph.has(src)) return -1;
    if (src === dst) return 1;

    visited.add(src);

    for (let [next, weight] of graph.get(src)) {
      if (!visited.has(next)) {
        const res = dfs(next, dst, visited);
        if (res !== -1) return res * weight;
      }
    }

    return -1;
  };

  return queries.map(([x, y]) => {
    if (!graph.has(x) || !graph.has(y)) return -1;
    return dfs(x, y, new Set());
  });
};

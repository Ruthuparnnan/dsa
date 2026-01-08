/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function (n, edges) {
  if (n === 1) return [0];

  const graph = Array.from({ length: n }, () => []);
  const degree = new Array(n).fill(0);

  for (let [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u);
    degree[u]++;
    degree[v]++;
  }

  let queue = [];

  for (let i = 0; i < n; i++) {
    if (degree[i] === 1) queue.push(i);
  }

  let remainingNodes = n;

  while (remainingNodes > 2) {
    const size = queue.length;
    remainingNodes -= size;
    const newQueue = [];

    for (let i = 0; i < size; i++) {
      const leaf = queue[i];

      for (const neighbor of graph[leaf]) {
        degree[neighbor]--;
        if (degree[neighbor] === 1) newQueue.push(neighbor);
      }
    }

    queue = newQueue;
  }

  return queue;
};

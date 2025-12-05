/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  const result = [];

  const graph = new Map();

  for (let i = 0; i < numCourses; i++) {
    graph.set(i, []);
  }

  for (let [a, b] of prerequisites) {
    graph.get(b).push(a);
  }

  const array = new Array(numCourses).fill(0);

  function dfs(course) {
    if (array[course] === 1) return false;
    if (array[course] === 2) return true;

    array[course] = 1;

    for (let next of graph.get(course)) {
      if (!dfs(next)) return false;
    }

    array[course] = 2;
    result.push(course);
    return true;
  }

  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) return [];
  }

  return result.reverse();
};

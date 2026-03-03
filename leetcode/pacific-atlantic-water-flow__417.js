/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
  const m = heights.length;
  const n = heights[0].length;

  const pacific = Array.from({ length: m }, () => Array(n).fill(false));
  const atlantic = Array.from({ length: m }, () => Array(n).fill(false));

  const dfs = (r, c, visited) => {
    visited[r][c] = true;

    const directions = [
      [1, 0],
      [0, 1],
      [-1, 0],
      [0, -1],
    ];

    for (let [dr, dc] of directions) {
      const nr = dr + r;
      const nc = dc + c;
      if (
        nr >= 0 &&
        nr < m &&
        nc >= 0 &&
        nc < n &&
        !visited[nr][nc] &&
        heights[nr][nc] >= heights[r][c]
      ) {
        dfs(nr, nc, visited);
      }
    }
  };

  for (let i = 0; i < m; i++) {
    dfs(i, 0, pacific); // left column
    dfs(i, n - 1, atlantic); // right column
  }

  for (let j = 0; j < n; j++) {
    dfs(0, j, pacific); // top row
    dfs(m - 1, j, atlantic); // bottom row
  }

  const result = [];

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (pacific[i][j] && atlantic[i][j]) {
        result.push([i, j]);
      }
    }
  }

  return result;
};

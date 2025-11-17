var pathSum = function (root, targetSum) {
  const result = [];

  function dfs(node, path, sum) {
    if (!node) return;

    path.push(node.val); // add current node to path

    // Check if leaf and sum matches
    if (!node.left && !node.right && sum === node.val) {
      result.push([...path]); // push copy of current path
    } else {
      // Continue DFS
      dfs(node.left, path, sum - node.val);
      dfs(node.right, path, sum - node.val);
    }

    path.pop(); // backtrack
  }

  dfs(root, [], targetSum);
  return result;
};

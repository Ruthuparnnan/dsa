var zigzagLevelOrder = function (root) {
  if (!root) return [];
  const result = [];
  const queue = [root];
  let level = 0; // Track level index (0 = root level)

  while (queue.length) {
    const levelSize = queue.length;
    const currentLevel = [];

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      currentLevel.push(node.val);

      // Push children in NATURAL order (left then right)
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    // Reverse the level if it's an odd-indexed level (1, 3, 5...)
    if (level % 2 === 1) {
      currentLevel.reverse();
    }

    result.push(currentLevel);
    level++;
  }

  return result;
};

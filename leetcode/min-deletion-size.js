function minDeletionSize(strs) {
  let columnDelete = 0;

  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 0; j < strs.length - 1; j++) {
      if (strs[j][i] > strs[j + 1][i]) {
        columnDelete++;
        break;
      }
    }
  }

  return columnDelete;
}

console.log(minDeletionSize(["cba", "daf", "ghi"]));

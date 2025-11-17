/**
 * @param {string} s
 * @return {string[]}
 */
var cellsInRange = function (s) {
  const startCol = s[0];
  const endCol = s[3];
  const startRow = Number(s[1]);
  const endRow = Number(s[4]);

  const result = [];

  for (let i = startCol.charCodeAt(0); i <= endCol.charCodeAt(0); i++) {
    for (let j = startRow; j <= endRow; j++) {
      result.push(String.fromCharCode(i) + j);
    }
  }

  return result;
};

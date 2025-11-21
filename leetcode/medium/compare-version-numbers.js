/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
  const v1 = version1.split(".").map(Number);
  const v2 = version2.split(".").map(Number);
  const n = Math.max(version1.length, version2.length);

  for (let i = 0; i < n; i++) {
    const a = v1[i] || 0;
    const b = v2[i] || 0;

    if (a > b) return 1;
    if (a < b) return -1;
  }

  return 0;
};

console.log(compareVersion("1.2.03"));

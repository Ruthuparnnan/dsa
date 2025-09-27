/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  path = path.split("/");

  const stack = [];

  for (let item of path) {
    if (item === "" || item === ".") continue;
    if (item === "..") {
      stack.pop();
      continue;
    }
    stack.push(item);
  }

  if (stack.length === 0) return "/";

  return "/" + stack.join("/");
};

/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function (preorder) {
  let slots = 1;

  const values = preorder.split(",");

  for (const value of values) {
    if (slots === 0) return false;

    slots--;

    if (value !== "#") slots += 2;
  }

  return slots === 0;
};

var countMatches = function (items, ruleKey, ruleValue) {
  let count = 0;
  let i = ruleKey === "type" ? 0 : ruleKey === "color" ? 1 : 2;

  for (let arr of items) {
    if (ruleValue === arr[i]) count++;
  }

  return count;
};

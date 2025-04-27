function longestCommonPrefix(array) {
  if (!array || array.length === 0) return "";
  let prefix = array[0];
  while (prefix) {
    const doesPrefixExists = array.every((element) =>
      element.startsWith(prefix)
    );
    if (doesPrefixExists) return prefix;
    prefix = prefix.slice(0, -1);
  }

  return "";
}
const strs = ["flower", "flowerpot", "flow"];
console.log(longestCommonPrefix(strs));

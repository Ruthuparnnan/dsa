function restoreString(s, indices) {
  const result = Array(s.length);

  for (let i = 0; i < s.length; i++) {
    result[indices[i]] = s[i];
  }

  return result.join("");
}

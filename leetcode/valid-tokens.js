var countValidWords = function (sentence) {
  // Split by spaces and filter empty tokens
  const tokens = sentence.trim().split(/\s+/);

  let count = 0;

  for (let token of tokens) {
    if (isValidWord(token)) {
      count++;
    }
  }
  return count;
};

function isValidWord(token) {
  // Rule 1: No digits allowed
  if (/\d/.test(token)) return false;

  // Rule 2: At most one hyphen and it must be surrounded by letters
  if ((token.match(/-/g) || []).length > 1) return false;
  if (/^-|-$/.test(token)) return false; // hyphen at start/end
  if (/[^a-z]-|-[^a-z]/.test(token)) return false; // not surrounded by letters

  // Rule 3: At most one punctuation (!,.,,) and only at the end
  if ((token.match(/[!.,]/g) || []).length > 1) return false;
  if (/[!.,]/.test(token) && !/[!.,]$/.test(token)) return false;

  // If all checks pass
  return true;
}

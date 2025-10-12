/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  const result = [];

  // Pre-check for string length: A valid IP address has 4 segments,
  // each 1-3 digits long. So, total length can be 4 to 12.
  if (s.length < 4 || s.length > 12) {
    return result;
  }

  // Helper function to validate an IP segment
  const isValidSegment = (segment) => {
    // Segment cannot be empty or longer than 3 digits
    if (segment.length === 0 || segment.length > 3) {
      return false;
    }
    // Check for leading zeros: "01" is invalid, "0" is valid
    if (segment.length > 1 && segment[0] === "0") {
      return false;
    }
    // Convert to integer and check range (0-255)
    const num = parseInt(segment, 10);
    return num >= 0 && num <= 255;
  };

  // Backtracking function
  // index: current starting position in string s
  // dots: number of segments successfully formed so far
  // currentParts: array of strings representing the current IP address parts
  const backtrack = (index, dots, currentParts) => {
    // Base case: If 4 segments are formed
    if (dots === 4) {
      // If we've used all characters from s, it's a valid IP address
      if (index === s.length) {
        result.push(currentParts.join("."));
      }
      return; // Prune if not all characters used, or if segments formed but not 4
    }

    // Pruning: If we've run out of characters but haven't formed 4 segments
    if (index === s.length) {
      return;
    }

    // Try forming segments of length 1, 2, or 3
    for (let i = 1; i <= 3; i++) {
      const endIndex = index + i;

      // Ensure we don't go out of bounds of the string
      if (endIndex > s.length) {
        break;
      }

      const segment = s.substring(index, endIndex);

      // If the current segment is valid
      if (isValidSegment(segment)) {
        // Add segment to current parts and recurse
        currentParts.push(segment);
        backtrack(endIndex, dots + 1, currentParts);
        currentParts.pop(); // Backtrack: remove the segment to try other possibilities
      }
    }
  };

  backtrack(0, 0, []); // Start backtracking from index 0, with 0 dots, and an empty parts array
  return result;
};

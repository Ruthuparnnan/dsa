function maxScore(s) {
  let totalOnes = 0;

  for (let char of s) {
    if (char === "1") totalOnes++;
  }

  let maxScore = 0;
  let oneSeenSoFar = 0;
  let zeros = 0;

  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === "0") {
      zeros++;
    } else {
      oneSeenSoFar++;
    }
    const newScore = zeros + (totalOnes - oneSeenSoFar);
    maxScore = Math.max(maxScore, newScore);
  }

  return maxScore;
}

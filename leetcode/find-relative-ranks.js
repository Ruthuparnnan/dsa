function findRelativeRanksOptimized(score) {
  const sortedScores = [...score].sort((a, b) => b - a);
  const ranks = {};

  sortedScores.forEach((s, index) => {
    if (index === 0) {
      ranks[s] = "Gold Medal";
    } else if (index === 1) {
      ranks[s] = "Silver Medal";
    } else if (index === 2) {
      ranks[s] = "Bronze Medal";
    } else {
      ranks[s] = (index + 1).toString();
    }
  });

  return score.map((s) => ranks[s]);
}

function findRelativeRanks(score) {
  const sortedArray = [...score].sort((a, b) => b - a);
  const result = [];

  score.forEach((element, index) => {
    const indexx = sortedArray.indexOf(element);
    if (indexx < 3) {
      if (indexx === 0) {
        result.push("Gold Medal");
      } else if (indexx === 1) {
        result.push("Silver Medal");
      } else if (indexx === 2) {
        result.push("Bronze Medal");
      }
    } else {
      result.push((indexx + 1).toString());
    }
  });

  return result;
}

// Test cases
console.log(findRelativeRanks([5, 4, 3, 2, 1])); // Output:
// ["Gold Medal", "Silver Medal", "Bronze Medal", "4", "5"]
console.log(findRelativeRanks([10, 3, 8, 9, 4])); // Output:
// ["Gold Medal", "5", "Bronze Medal", "Silver Medal", "4"]

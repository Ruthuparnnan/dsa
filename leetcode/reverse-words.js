function reverseWords(s) {
  const array = s.split(" ");
  const newArray = [];

  for (let word of array) {
    newArray.push(word.split("").reverse().join(""));
  }

  return newArray.join(" ");
}

// Test cases
console.log(reverseWords("Let's take LeetCode contest")); //
console.log(reverseWords("God Ding")); //

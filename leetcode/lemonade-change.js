function lemonadeChangeOptimized(bills) {
  let five = 0;
  let ten = 0;

  for (let bill of bills) {
    if (bill === 5) {
      five++;
    } else if (bill === 10) {
      if (five === 0) return false;
      five--;
      ten++;
    } else { // bill === 20
      if (ten > 0 && five > 0) {
        ten--;
        five--;
      } else if (five >= 3) {
        five -= 3;
      } else {
        return false;
      }
    }
  }

  return true;
}


function lemonadeChange(bills) {
  const billMap = new Map();

  for (let bill of bills) {
    const fiveCount = billMap.get(5);
    const tenCount = billMap.get(10);
    if (bill === 5) {
      billMap.set(5, (fiveCount || 0) + 1);
    } else if (bill === 10) {
      if (fiveCount >= 1) {
        billMap.set(5, fiveCount - 1);
        billMap.set(10, (tenCount || 0) + 1);
      } else {
        return false;
      }
    } else if (bill === 20) {
      if (fiveCount >= 1 && tenCount >= 1) {
        billMap.set(5, fiveCount - 1);
        billMap.set(10, tenCount - 1);
      } else if (fiveCount >= 3) {
        billMap.set(5, fiveCount - 3);
      } else {
        return false;
      }
    }
  }

  return true;
}

// Test cases
console.log(
  lemonadeChange([
    5, 5, 10, 20, 5, 5, 5, 5, 5, 5, 5, 5, 5, 10, 5, 5, 20, 5, 20, 5,
  ])
); // Output: true
// console.log(lemonadeChange([5, 5, 10, 10, 20])); // Output: false

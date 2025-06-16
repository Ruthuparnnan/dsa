

function dayOfYear(date) {
  const array = date.split("-");
  const year = Number(array[0]);
  const day = Number(array[2]);
  const month = Number(array[1]);
  let days = 0;

  const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }
  if (isLeapYear(year)) {
    daysInMonth[1] = 29;
  }
  for (let i = 0; i < month - 1; i++) {
    days += daysInMonth[i];
  }
  return days + day;
}

// Example usage:
console.log(dayOfYear("2020-01-01")); // Output: 1
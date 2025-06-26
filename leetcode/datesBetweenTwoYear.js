function days(date1, date2) {
  const parseDate = (date) => {
    const [year, month, day] = date.split("-").map(Number);
    return { year, month, day };
  };

  const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  function isLeap(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }

  const daysFromDate = (date) => {
    let totalDays = 0;
    const { year, month, day } = date;

    for (let y = 0; y < year; y++) {
      totalDays += isLeap(y) ? 366 : 365;
    }

    for (let m = 0; m < month - 1; m++) {
      totalDays += daysInMonth[m];
      if (isLeap(year) && m === 1) totalDays += 1;
    }

    totalDays += day;
    return totalDays;
  };

  const firstYearDays = daysFromDate(parseDate(date1));
  const secondYearDays = daysFromDate(parseDate(date2));

  return Math.abs(firstYearDays - secondYearDays);
}

var reformatDate = function (date) {
  const monthMap = {
    Jan: "01",
    Feb: "02",
    Mar: "03",
    Apr: "04",
    May: "05",
    Jun: "06",
    Jul: "07",
    Aug: "08",
    Sep: "09",
    Oct: "10",
    Nov: "11",
    Dec: "12",
  };

  const [day, month, year] = date.split(" ");

  const dayFormatted = parseInt(day).toString().padStart(2, "0");
  return `${year}-${monthMap[month]}-${dayFormatted}`;
};

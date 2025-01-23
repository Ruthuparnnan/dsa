function convertTo24Format(input) {
  const [time, specifier] = input.split(" ");
  const [hour, minutes] = time.split(":");
  if (hour[0] === "0" && specifier === "am") return input;
  else if (hour === "12" && specifier === "am") return "00:" + minutes + " am";
  else if (hour[0] === "0" && specifier === "pm") {
    const formattedTime = Number(hour[1]) + 12;
    return formattedTime + ":" + minutes + " pm";
  }

  return input;
}

// 01:00 am
console.log(convertTo24Format("02:55 pm"));

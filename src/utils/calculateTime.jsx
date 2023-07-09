export const calculateTime = (date) => {
  const selectedDate = new Date(date);
  const currentDate = new Date();

  const selectedYear = selectedDate.getFullYear();
  const currentYear = currentDate.getFullYear();

  const selectedMonth = selectedDate.getMonth();
  const currentMonth = currentDate.getMonth();

  const selectedDay = selectedDate.getDay();
  const currentDay = currentDate.getDay();

  const selectedHours = selectedDate.getHours();
  const currentHours = currentDate.getHours();

  const selectedMinutes = selectedDate.getMinutes();
  const currentMinutes = currentDate.getMinutes();

  const selectedSeconds = selectedDate.getSeconds();
  const currentSeconds = currentDate.getSeconds();

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Aug",
    "Nov",
    "Dec",
  ];

  if (
    selectedYear === currentYear &&
    selectedMonth === currentMonth &&
    selectedDay === currentDay
  ) {
    if (currentHours - selectedHours >= 1) {
      return `${currentHours - selectedHours} hour${
        currentHours - selectedHours > 1 ? "s" : ""
      } ago`;
    } else if (currentMinutes - selectedMinutes >= 1) {
      return `${currentMinutes - selectedMinutes} minute${
        currentMinutes - selectedMinutes > 1 ? "s" : ""
      } ago`;
    } else if (currentSeconds - selectedSeconds >= 1) {
      return `${currentSeconds - selectedSeconds} second${
        currentSeconds - selectedSeconds > 1 ? "s" : ""
      } ago`;
    } else {
      return "now";
    }
  } else if (selectedYear === currentYear) {
    return `${months[selectedDate.getMonth()]} ${selectedDate.getDate()}`;
  } else {
    return `${
      months[selectedDate.getMonth()]
    } ${selectedDate.getDate()}, ${selectedDate.getFullYear()}`;
  }
};

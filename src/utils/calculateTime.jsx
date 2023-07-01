export const calculateTime = (date) => {
  const selectedDate = new Date(date);
  const currentDate = new Date();

  const selectedYear = selectedDate.getFullYear();
  const currentYear = currentDate.getFullYear();

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

  if (selectedYear === currentYear) {
    return `${months[selectedDate.getMonth()]} ${selectedDate.getDate()}`;
  } else {
    return `${
      months[selectedDate.getMonth()]
    } ${selectedDate.getDate()}, ${selectedDate.getFullYear()}`;
  }
};

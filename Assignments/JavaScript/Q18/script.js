// Program which tells the number of days in a month in a leap year

const data = {
  january: 31,
  february: 29,
  march: 31,
  april: 30,
  may: 31,
  june: 30,
  july: 31,
  august: 31,
  september: 30,
  october: 31,
  november: 30,
  december: 31,
};
const userInput = prompt("Please enter month to know the days");

alert(
  `There are ${
    data[userInput.toLowerCase()]
  } days in ${userInput.toLowerCase()} of leap year`
);

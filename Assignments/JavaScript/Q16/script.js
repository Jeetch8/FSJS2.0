//Tells season by the month input

const userInput = prompt(
  "Please enter a month to know the season"
).toLowerCase();

allSeason.forEach((season) => {
  if (season.includes(userInput)) {
    console.log(season);
    return;
  }
});

if (
  userInput === "september" ||
  userInput === "october" ||
  userInput === "november"
) {
  console.log("Autumn");
} else if (
  userInput === "December" ||
  userInput === "January" ||
  userInput === "February"
) {
  console.log("Winter");
} else if (
  userInput === "March" ||
  userInput === "April" ||
  userInput === "May"
) {
  console.log("Spring");
} else if (
  userInput === "June" ||
  userInput === "July" ||
  userInput === "August"
) {
  console.log("Summer");
}

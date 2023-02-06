const userNumberInput = prompt("Please enter number of lines to print on");
const userTypeInput = prompt(
  `Please enter the pattern you want to print - left triangle, square, pyramid`
);

let starsSTr = "";
if (userTypeInput === "left triangle") {
  for (let i = 0; i <= userNumberInput - 1; i++) {
    for (let j = 0; j <= i; j++) {
      starsSTr += "*";
    }
    starsSTr += "\n";
  }
} else if (userTypeInput === "square") {
  for (let i = 0; i <= userNumberInput - 1; i++) {
    for (let j = 0; j <= userNumberInput - 1; j++) {
      starsSTr += "*";
    }
    starsSTr += "\n";
  }
} else if (userTypeInput === "pyramid") {
  for (let i = 1; i <= userNumberInput; i++) {
    for (let j = 1; j <= userNumberInput - i; j++) {
      starsSTr += " ";
    }
    for (let k = 0; k < 2 * i - 1; k++) {
      starsSTr += "*";
    }
    starsSTr += "\n";
  }
} else {
  alert("Enter a valid option");
}
console.log(starsSTr);

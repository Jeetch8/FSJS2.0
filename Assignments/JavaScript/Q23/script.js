// Write a program to check that the number given by the user is a prime number or not.
const userInput = prompt(
  "Please input a number to know it is prime number or not"
);

function primNumChecker() {
  const numArr = [];
  for (let i = 1; i <= userInput; i++) {
    if (userInput % i === 0) {
      numArr.push(i);
    }
  }
  if (numArr[0] == 1 && numArr[1] == userInput) {
    alert(`${userInput} is a prime number`);
  } else {
    alert(`${userInput} is not a prime number`);
  }
}
primNumChecker();

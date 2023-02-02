// Create a simple calculator program in JavaScript which can perform the addition, substraction, multiplication and division on given numbers.

const firstNum = prompt("Enter a the first number");
const operator = prompt("Please inpuit what operation you want to perform");
const secNum = prompt("Please enter the second number");

alert(eval(`${Number(firstNum)} ${operator} ${Number(secNum)}`));

// Write a javascript program which takes the input of filename as string and prints the extension of the file in the console.

const fileName = prompt("Please input a filename to get the extension name");
const extension = fileName.split(".")[1];

alert(extension);

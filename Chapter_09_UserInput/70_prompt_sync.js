const prompt = require('prompt-sync')();
let num = Number(prompt("Enter a number: "));
if (num % 2 === 0) {
    console.log("This is an even number: " + num);
} else {
    console.log("This is an odd number: " + num);
}

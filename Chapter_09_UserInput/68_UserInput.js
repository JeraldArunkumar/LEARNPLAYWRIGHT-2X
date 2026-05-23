//Tthis code prompts the user to enter a number, converts the input to a number, and checks if it is even or odd. It then logs the appropriate message to the console.
//this will run in browser console but not in node js because prompt is not defined in node js environment.

let num=prompt("Enter a number:");    
num=Number(num); // Convert the input to a number
if (num%2===0) {
    console.log("this is even number"+num);
} else {
    console.log("This is an odd number:", num);
}
let i=[1, 2, 3, 4, 5];//array of numbers
let j=["apple", "banana", "cherry"];//array of strings
//another way to create array
let k = new Array(1, 2, 3, 4, 5);
console.log(i);
console.log(j);
console.log(k);
let emptyArray = new Array(5); // creates an array of length 5 with all elements undefined
console.log(emptyArray);

let k=Array.of(1, 2, 3, 4, 5); // creates an array of numbers using Array.of()

let m=Array.from("hello"); // creates an array from a string
console.log(k);
console.log(m);//output: ['h', 'e', 'l', 'l', 'o']

//Single quotes and double quotes can be used to create string literals in JavaScript. Both are valid and functionally equivalent, allowing you to choose based on your preference or the need to include certain characters without escaping them.
//if we are using single quotes for a string, we can include double quotes inside without escaping, and vice versa.

let singleQuoteString = 'This is a string with single quotes says "Hello, World!".';
console.log(singleQuoteString); 
console.log('typeof singleQuoteString:', typeof singleQuoteString); // "string"

let doubleQuoteString = "This is a string with double quotes says 'Hello, World!'.";
console.log(doubleQuoteString); 
console.log('typeof doubleQuoteString:', typeof doubleQuoteString); // "string"

let c='Hello, World!'; // String literal
console.log(c); 
console.log('typeof c:', typeof c); // "string"

let greeting = "Welcome to JavaScript!";    
console.log(greeting);
console.log('typeof greeting:', typeof greeting); // "string"

// 29_backtik_single_double_quote.js
// Differences between backtick (`), single quotes ('), and double quotes (") in JavaScript strings.

// 1. Single quotes: basic string literal
const singleQuote = 'Hello, world!';

// 2. Double quotes: equivalent to single quotes, just a different delimiter
const doubleQuote = "Hello, world!";

// 3. Backticks (template literals): allow interpolation and multi-line strings
const name = 'Arun';
const backtick = `Hello, ${name}!`; // variable interpolation inside ${}

console.log(singleQuote);
console.log(doubleQuote);
console.log(backtick);

// Summary:
// - Single and double quotes are mostly interchangeable for plain strings.
// - Backticks offer template expressions and multi-line support.

console.log(typeof 42); // "number" (the type of the value 42 is number
console.log(typeof 'Hello'); // "string" (the type of the value 'Hello' is string
console.log(typeof true); // "boolean" (the type of the value true is boolean
console.log(typeof undefined); // "undefined" (the type of the value undefined is undefined
console.log(typeof null); // "object" (the type of the value null is object, this is a historical quirk in JavaScript
console.log(typeof { name: 'Alice', age: 30 }); // "object" (the type of the value { name: 'Alice', age: 30 } is object
console.log(typeof [1, 2, 3]); // "object" (the type of the value [1, 2, 3] is object, arrays are a type of object in JavaScript
console.log(typeof function() {}); // "function" (the type of the value function() {} is function, functions are a special type of object in JavaScript
console.log(typeof Symbol('sym')); // "symbol" (the type of the value Symbol('sym') is symbol, symbols are a unique and immutable primitive type in JavaScript  
console.log(typeof BigInt(12345678901234567890)); // "bigint" (the type of the value BigInt(12345678901234567890) is bigint, bigints are a numeric primitive type that can represent integers with arbitrary precision in JavaScript

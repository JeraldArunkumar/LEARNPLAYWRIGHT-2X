// 23_null_undefined.js
// Demonstrates the difference between null and undefined in JavaScript.

// undefined means a variable has been declared but not assigned a value.
let a;
console.log('a:', a); // undefined
console.log('typeof a:', typeof a); // "undefined"

// undefined also appears when accessing a missing object property.
const person = { name: 'Arun' };
console.log('person.age:', person.age); // undefined

// null is an assignment value that means "no value" or "empty value".
let b = null;
console.log('b:', b); // null
console.log('typeof b:', typeof b); // "object" (this is a historical quirk)

// Use null when you want to explicitly clear a variable.
b = null;
console.log('b after explicit clear:', b); // null

// Example showing the difference in intent:
function findUser(id) {
  if (id === 0) {
    return null; // user was searched for, but not found
  }
  // no return statement below means undefined would be returned
}

console.log('findUser(0):', findUser(0)); // null
console.log('findUser(1):', findUser(1)); // undefined

// Summary:
// - undefined: value is absent because a variable was never assigned, a property is missing, or a function returns nothing.
// - null: value is absent because it was explicitly set to no value.
// They are different values, but both mean "no useful value here" in JavaScript.

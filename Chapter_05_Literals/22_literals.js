let name= 'Arun';// String literal
let age= 6.5; // Number literal
let isStudent= true; // Boolean literal
let hobbies= ['coding', 'gaming', 'traveling']; // Array literal
let nullValue= null; // Null literal
let undefinedValue= undefined; // Undefined literal
let person= { // Object literal
    name: 'Arun',
    age: 6.5,
    isStudent: true,
    hobbies: ['coding', 'gaming', 'traveling']
};

//typeof operator
console.log(typeof name); // "string"
console.log(typeof age); // "number"
console.log(typeof isStudent); // "boolean"
console.log(typeof hobbies); // "object" (arrays are a type of object)
console.log(typeof nullValue); // "object" (this is a historical quirk in JavaScript)
console.log(typeof undefinedValue); // "undefined"
console.log(typeof person); // "object" 
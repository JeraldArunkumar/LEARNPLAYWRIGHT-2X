//using spread functionality to copy an object
let a={name: "Alice", age: 30};
let b={...a} //copying the properties of object a to b using spread operator
b.name="Bob";
console.log(a) // {name: "Alice", age: 30}
console.log(b) // {name: "Bob", age: 30}
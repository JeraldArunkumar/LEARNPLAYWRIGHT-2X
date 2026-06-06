//object is not a primitive data type, it is a complex data structure that can store multiple values and functions. Objects are created using curly braces {} and can have properties and methods.
//prmitive variable example
let name="Alice"; //string primitive
let age=30;
let name2=name
console.log(name) //Alice
let name2="Bob";
console.log(name) //Alice - because name is a primitive data type and it is copied by value, so changing name2 does not affect name.
console.log(name2) //Bob

//Object - copied by reference
let person={name:"Alice",age:30} //object
let person2=person //person2 is a reference to the same object in memory as person
console.log(person) //{name: 'Alice', age: 30}
console.log(person2) //{name: 'Alice', age: 30}
person2.name="Bob" //changing the name property of person2 will also change the name property of person because they are referencing the same object in memory

console.log(person) //{name: 'Bob', age: 30}
console.log(person2) //{name: 'Bob', age: 30}
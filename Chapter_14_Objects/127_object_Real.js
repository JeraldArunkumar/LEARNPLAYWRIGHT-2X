//Real-world example of object creation and usage
//In this example, we will create a person object and manipulate its properties.
let person={}
person.name="Alice";
person.age=30;
console.log(person) //{ name: "Alice", age: 30 }

delete person.age; //deleting the age property from the person object
console.log(person) //{ name: "Alice" }
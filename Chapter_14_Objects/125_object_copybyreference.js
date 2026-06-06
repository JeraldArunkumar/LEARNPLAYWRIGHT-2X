let a={name: "Alice", age: 30};
//console.log(a.name); // "Alice")
let b=a; //copying the reference of object a to b
//console.log(b.name); // "Alice"
b.name="Bob";   
//console.log(a.name); // "Bob" - because a and b reference the same object

//Another way to access the properties of an object is by using bracket notation. 

    console.log(a["name"] + ", " + a["age"]); // "Bob, 30"
    
//Normal object
let a={
    name: "Alice",
    age: 30,    
}
//object with a function
let b={
    name: "Bob",
    age: 25,
    greet:function(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}       
let c=b.greet();
     //Hello, my name is Bob and I am 25 years old.
console.log(c) //undefined - because the greet function does not return anything, it only logs a message to the console.

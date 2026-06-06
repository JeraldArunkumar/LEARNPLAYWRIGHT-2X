let a={
    name:"Alice",
    age:30,
    greet:function(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
a.greet() //Hello, my name is Alice and I am 30 years old.  


let b={
    "name":"Bob",
    "age":25,
    
    }

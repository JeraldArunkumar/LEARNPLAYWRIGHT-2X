var a = 10; //Global variable
console.log(a); // Output: 10

function greet() {
    console.log("Hello, World!");
    var a = 20;//local variable
    console.log(a); // Output: 20
    if (true) {
        var a = 30;
        console.log(a); // Output: 30   
    }

}
    greet(); // Output: Hello, World! and 20
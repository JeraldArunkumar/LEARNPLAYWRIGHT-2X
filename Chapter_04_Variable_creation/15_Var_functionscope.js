var a=10
console.log(a); // Output: 10

function printhello(){
    console.log("Hello, World!");
    var a=20;
    console.log(a);
    if (true){
        var a=30;
        console.log(a);
    }
    console.log("F--> ", a);//this will display the latest value 30 --function scope of Var eg
}

console.log("G--> ", a);//this will display global value 10
printhello();
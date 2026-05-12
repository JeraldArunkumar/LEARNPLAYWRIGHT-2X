let a=10
console.log(a); // Output: 10

function printhello(){
    console.log("Hello, World!");
    let a=20;
    console.log(a);
    if (true){
        let a=30;
        console.log(a);
    }
    console.log("F--> ", a);//this will display the latest value 20 --block scope of let eg
}

console.log("G--> ", a);//this will display global value 10
printhello();
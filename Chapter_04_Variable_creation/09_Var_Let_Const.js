var v=10;
let l=30;
const c=4.50;

//Redeclaration & reassignment
var browser = "Chrome"; // valid
var browser = "Firefox"; // valid: redeclaration allowed with var
browser = "Safari"; // valid: reassignment allowed with var

//for  function
var testCases=[ "login","logout","signup"];
for (var i=0;i<testCases.length;i++){
    console.log("Running Testcases: ",testCases[i]);
}
console.log ("loop counter leaked outside:",i); // i is accessible outside the loop due to var's function scope

//Function
function greet() {
    console.log("Hello, World!");
}
greet(); // Output: Hello, World!
greet();


/*
//let
let language = "JavaScript"; // valid
// let language = "Python"; // invalid: redeclaration not allowed with let
language = "TypeScript"; // valid: reassignment allowed with let
*/
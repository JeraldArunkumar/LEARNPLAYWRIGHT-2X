//single quotes string
let A='Jerald '

//double quotes string
let B="Arun"

//Using template literals (backticks) string    
let name=`Jerald`
let message=`Hi ${name} how are you?`
console.log(message) //Hi Jerald how are you?

//Multiline string using template literals

let Report=`Test: Login
status: Pass
Time: 120ms`
console.log(Report)


//string as array of characters
//Using String interface
z= new String('Hello')  
console.log(z) //String {'Hello'}
console.log(typeof z) //object

console.log(String('Hello')) //Hello
console.log(typeof String('Hello')) //string
console.log(String('123')) //123
console.log(typeof String('123')) //string
console.log(String([23,123])) //
console.log(typeof String([23,123])) //string

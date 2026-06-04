//Arrow function (ES6)-- this is Js 6 version


//Below is function expresion
const greet= function (name)
{
    return 'Hi '  +name
}

let x= greet('Jerald')
console.log(x)

//Above expression function can be rephrased as arrow function as given below
//Remove the keyword function,remove the keyword return,
const greet1= (name)=>'Hi '   +name 
let c=greet1('kumaaru')
console.log(c)

const doubleit=n=>n*10
let d= doubleit(20)
console.log(d)

//another way
const printIt=name=>console.log(name)

printIt('Jerald Arunkumar')


//Normal function
function Greet()
{
    console.log('Hi everyone')
}


// another way of converting function to arrow function
const Greet1=()=>console.log('Hi everyone')

//another way

const Greet2=()=>'Hi everyone'

//when we write more than one line of code in arrow function we need to use curly braces and return keyword
const Greet3=(name)=>{
    let greetMsg='Hi ' + name
    return greetMsg
}


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


function getstatus(code)
{
    if(code>=200 && code<300)   
        return 'Success'
    else if(code>=300 && code<400)
        return 'Client error'
    else if(code>=400 && code<500)
        return 'Server error'

}
let status=getstatus(200)
console.log(status)

//undefined since logtest function does not return anything
function logtest(name){
    console.log(`Running test ${name}`)
}

let testname=logtest ('QAtesting')
console.log(testname) 

//example of calling the function before defined....but functions are hoisted in js therefore we can call the function before defining it
logtest1('QAtesting')
function logtest1(name){
    console.log(`Running test ${name}`)
}
//function expression cannot be called before defining it since they are not hoisted...willl have reference error
//logtest2('QAtesting') //this will give error since logtest2 is not defined before calling it

logtest2('QAtesting')

const logtest2=function(name){
    console.log(`Running test ${name}`)
}

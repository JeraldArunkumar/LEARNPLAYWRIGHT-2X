function runtest(name,status,duration)
{
    return(`Running test ${name} with status ${status} and duration ${duration}ms`)
}
//runtest('Test1','passed',1000)
//since are getting return value we havent stored and printed therefore we dont see any output in console
let result=runtest('Test1','passed',1000)
console.log(result) 

function add(a,b,c)
{    return a+b+c
}
let nums=[10,20,30]
add(...nums) //spread operator is used to spread the array elements as individual arguments to the function 
console.log(add(...nums))//60


//Another example of spread operator is to combine two arrays

let response=[200,300,350]
function haserror (...codes)
{
    return codes.some(code=>code>=400)
}
console.log(haserror(...response)) //false

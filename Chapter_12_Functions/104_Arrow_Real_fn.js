//if our status code(>=200 and <300) is in success range then we can use 

function statusCode(status)
{
    if(status>=200 && status<300)
    {
        console.log('Success')
    }
}

//converted into Function expression
const statusCode1= function(status)
{
    if(status>=200 && status<300)
    {
        console.log('Success')
    }
}

//converted into Arrow function
const statusCode2=(status)=>{
    if(status>=200 && status<300)
    {
        console.log('Success')
    }
}
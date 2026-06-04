//scope in function

let environment='production'
function setup()
{
    let timezone='IST'
    console.log('Environment:',environment)
    console.log('Timezone:',timezone)
}
setup() 
//console.log('Timezone:',timezone) //it will give error as timezone is not defined in global scope
console.log('Environment:',environment) //it will work since environment is defined in global scope
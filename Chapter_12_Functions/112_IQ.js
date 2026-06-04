//nested scope bocked scope

let g_x=10
function outer()
{ 
    let y=20
    function inner()
    {
        let z=30
        console.log(y)//
    }
    inner()
    console.log(y) //it will work since y is defined in outer scope
    console.log(g_x) //it will work since g_x is defined in global scope
    console.log(z) //it will give error since z is defined in inner scope
}
outer()

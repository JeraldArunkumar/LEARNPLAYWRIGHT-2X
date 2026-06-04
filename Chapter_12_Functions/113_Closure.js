
function outer()
{ 
    let y="Hello, World!"
    console.log(" outer function:")
    function inner()
    {
        console.log(" inner function:" + y)
        }
    return inner
}

let ft_inner=outer()//it will call outer function and return inner function and store it in ft_inner variable   
//ft_inner()//it will call inner function as it is stored in ft_inner variable

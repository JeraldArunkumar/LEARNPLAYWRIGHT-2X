let a={status:"Active"};
let b={status:"Active"};
console.log(a==b) //false because a and b are different objects in memory   
if (a===b)
    console.log("a and b are equal")
else
    console.log("a and b are not equal")

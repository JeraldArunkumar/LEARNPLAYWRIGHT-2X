//Java script does not allow duplicate case values in a switch statement. In the above code, there are two cases with the value 10, which will result in a syntax error. The second case with the value 10 will never be reached, and the code will not execute properly. To fix this issue, you should remove one of the cases with the value 10 or change its value to something else.
//In Java it will throw error: duplicate case label. In Java, each case in a switch statement must have a unique value. The second case with the value 10 will cause a compile-time error because it is a duplicate of the first case with the same value. To fix this issue, you should remove one of the cases with the value 10 or change its value to something else.
let x=10
switch(x){
    case 5:
        console.log("Value is 5");
        break;
    case 10:
        let y=20;
        console.log("Value is 10");
        console.log("Value of y is "+y);
        break;  
    case 10 :
        let z=30;
        console.log("Value is 10");
        console.log("Value of z is "+z);
        break;  
    default:
        console.log("Default Value is not 5 or 10");
}

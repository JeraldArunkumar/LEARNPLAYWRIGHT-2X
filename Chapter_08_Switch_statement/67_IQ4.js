//swith example without default case...if the value of day does not match any of the cases, the switch statement will simply do nothing and exit without executing any code. In this example, since there is no default case, if day is set to a value that is not between 1 and 7, nothing will be printed to the console.

let value  = "8";
switch(value){
    case 8:
        console.log("Value is 8 number");
        break;
    case "8":
        console.log("Value is the string '8'");
        break;
}

let status=0
switch(status){
    case false:
        console.log("Status is false");
        break;
    case 0:
        console.log("Status is 0");
        break;

}
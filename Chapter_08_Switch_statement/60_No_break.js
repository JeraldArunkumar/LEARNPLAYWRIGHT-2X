//without break...if break is not used, the execution will continue to the next case until it encounters a break or the end of the switch statement. This can lead to unintended consequences if not handled carefully. In this example, since there are no break statements, when day is 3, it will print "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", and "Invalid day" sequentially.

let day = 3;
switch (day) {
    case 1: 
        console.log("Monday");
    case 2:
        console.log("Tuesday");
    case 3:
        console.log("Wednesday");
    case 4:
        console.log("Thursday");
    case 5:
        console.log("Friday");
    case 6:
        console.log("Saturday");
    case 7:
        console.log("Sunday");
    default:
        console.log("Invalid day");
}


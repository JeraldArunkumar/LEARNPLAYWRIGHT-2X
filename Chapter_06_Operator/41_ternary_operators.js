let RJ_age = 20;
let will_RJ_Go = RJ_age >= 18 ? "Goes to Goa" : "Does not go to Goa";
console.log(will_RJ_Go);

let actual_status=200
let expected_status=200
let status=actual_status==expected_status ? "Pass" : "Fail";
console.log(status);    

let environment="staging"
let url=environment=="production" ? "https://api.examples.com" : "https://staging-api.examples.com";
console.log(url);

let isCI=true
let browser_mode=isCI ? "Running in headless" : "Running in headed mode";
console.log("launching browser", browser_mode," mode for testing");


let response_time=1001
let sla =1000
let sla_status=response_time <= sla ? "Within SLA" : "SLA Breached";
console.log(`Response Time: ${response_time} ms, ${sla_status}`);

let Arun_age=18
let Arun_status=Arun_age >= 18 ? (Arun_age>26 ? "Drink" : "No Drink ") : "Minor";
console.log(Arun_status);


// IQ question- Multiple nested ternary operators
let status_code=500;
let category=
    status_code <= 300 ? "Server Error" : 
        status_code < 400 ? "Client Error" : 
            status_code < 500 ? "Redirection" : "Unknown";
console.log(`Status Code: ${status_code}, Category: ${category}`);


//Find max between 3 numbers using nested ternary operator
let num1=10, num2=20, num3=15;
let max=num1 > num2 ? (num1 > num3 ? num1 : num3) : (num2 > num3 ? num2 : num3);
console.log(`The maximum number among ${num1}, ${num2}, and ${num3} is: ${max}`);
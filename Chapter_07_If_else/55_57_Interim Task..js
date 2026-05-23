//finding ODD and EVEN number

// let a=10
// if (a%2===0){
//     console.log("a is Even number");
// }
// else{
//     console.log("a is an odd number");
// }

//Student grade calculation


let mark=80;
if (mark>=90){
    console.log("Grade A");
}
else if (mark>=80){
    console.log("Grade B");
}
else if (mark>=70){
    console.log("Grade C");
}   
else if (mark>=60){
    console.log("Grade D");
}
else{
    console.log("Grade F");
}

leap year calculation
//divisible by 4 and not divisible by 100 or divisible by 400

let year=2020;
if ((year%4===0 && year%100!==0) || (year%400===0)){
    console.log(year+" is a leap year");
}   


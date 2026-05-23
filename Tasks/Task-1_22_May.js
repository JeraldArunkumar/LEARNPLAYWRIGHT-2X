//program for Traiange classifier based on the lengths of its sides.
 let a=5;
 let b=8;
 let c=6;
 if (a===b && b===c) {
     console.log("This is an equilateral triangle");
 } else if (a===b || b===c || a===c) {
     console.log("This is an isosceles triangle");
 } else {
     console.log("This is a scalene triangle");
 }




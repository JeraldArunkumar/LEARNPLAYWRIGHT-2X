//comparison operator will compare two values and return a boolean result (true or false)
let a = 10, b = 5;
console.log(a == b); // false (equal to)
console.log(a != b); // true (not equal to)
console.log(a > b); // true (greater than)
console.log(a < b); // false (less than)
console.log(a >= b); // true (greater than or equal to)
console.log(a <= b); // false (less than or equal to)

//== (Loose comparison) compares values for equality, but ignores the type of the values
console.log(5 == '5'); // true (5 is equal to '5' when type is ignored) 
//=== (Strict comparison) compares values for equality, and also checks the type of the values
console.log(5 === '5'); // false (5 is not equal to '5' when type is considered)


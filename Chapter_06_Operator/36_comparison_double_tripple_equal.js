// difference between double and tripple equal
// Double equal (==) is a loose equality operator that compares values for equality, but ignores the type of the values. It performs type coercion if necessary.
console.log(5 == '5'); // true (5 is equal to '5' when type is ignored)
// Triple equal (===) is a strict equality operator that compares values for equality, and also checks the type of the values.
console.log(5 === '5'); // false (5 is not equal to '5' when type is considered)    
console.log(5 === 5); // true (5 is equal to 5 and both are of the same type)
console.log(null == undefined); // true (null and undefined are considered equal in loose comparison)
console.log(null === undefined); // false (null and undefined are not the same type, so they are not equal in strict comparison)    
console.log(0 == false); // true (0 is considered false in loose comparison)
console.log(0 === false); // false (0 is a number and false is a boolean, so they are not equal in strict comparison)   
console.log('' == false); // true (empty string is considered false in loose comparison)
console.log('' === false); // false (empty string is a string and false is a boolean, so they are not equal in strict comparison)   

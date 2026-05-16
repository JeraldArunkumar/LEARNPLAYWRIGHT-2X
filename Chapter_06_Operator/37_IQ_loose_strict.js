console.log(0==""); // true (0 is considered equal to an empty string in loose comparison)
console.log(0=="0"); // true (0 is considered equal to '0' in loose comparison)
console.log(0===0); // true (0 is equal to 0 and both are of the same type)
console.log(""=="0"); // false (empty string is not equal to '0' in strict comparison) -Transitivity broken
console.log(false==0); // true (false is considered equal to 0 in loose comparison)

console.log(false==0); // true (false is considered equal to 0 in loose comparison)
console.log(false===0); // false (false is a boolean and 0 is a number, so they are not equal in strict comparison)
console.log(null==undefined); // true (null and undefined are considered equal in loose comparison)
console.log(null==0); // false (null is not equal to 0 in loose comparison)
console.log(null===undefined); // false (null and undefined are not the same type, so they are not equal in strict comparison)


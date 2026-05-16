// 38_confusing_comparison.js
// Examples showing the difference between == and === in JavaScript.

// == performs type coercion before comparison.
console.log('1 == "1"', 1 == '1'); // true because string is converted to number
console.log('0 == false', 0 == false); // true because false is converted to 0
console.log('null == undefined', null == undefined); // true because they are considered equal in ==
console.log('[1,2] == ' + '"1,2"', [1, 2] == '1,2'); // true because array is converted to string

// === performs strict comparison without type coercion.
console.log('1 === "1"', 1 === '1'); // false because types differ (number vs string)
console.log('0 === false', 0 === false); // false because number and boolean are different
console.log('null === undefined', null === undefined); // false because types differ
console.log('[1,2] === "1,2"', [1, 2] === '1,2'); // false because different types and different objects

// More confusing cases:
console.log('false == "0"', false == '0'); // true because "0" -> 0 and false -> 0
console.log('false === "0"', false === '0'); // false because types differ
console.log('"\n" == 0', '\n' == 0); // true because string whitespace coerces to 0
console.log('"\n" === 0', '\n' === 0); // false because types differ

// Best practice: use === unless you intentionally want coercion.
console.log('Use strict equality for predictable behavior: 1 === 1 ->', 1 === 1);

console.log(NaN==NaN); // false (NaN is not equal to anything, including itself)
console.log(NaN===NaN); // false (NaN is not equal to anything, including itself )
console.log(Object.is(NaN, NaN)); // true (Object.is correctly identifies NaN as equal to itself)
console.log( Number.isNaN(NaN)); // true (Number.isNaN correctly identifies NaN)

console.log(typeof null); // "object" (this is a historical quirk in JavaScript)
console.log(typeof undefined); // "undefined"   
console.log(typeof NaN); // "number" (NaN is considered a number in JavaScript)
console.log(typeof null== Object); // false (typeof null is "object", not 0)
console.log(typeof null== "object"); // true (typeof null is "object")



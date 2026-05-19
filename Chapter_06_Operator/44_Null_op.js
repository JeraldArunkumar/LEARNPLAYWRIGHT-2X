console.log(null>=0); // true (null is treated as 0 in numeric comparisons)
console.log(null=== 0); // false (null is not equal to 0)

//?? Nullish coalescing operator (??) is a logical operator that returns the right-hand side operand when the left-hand side operand is null or undefined, and otherwise returns the left-hand side operand.

let amul= null;
let milk_required= amul ?? 'hatsun'; // since amul is null, milk required will be assigned 'No value'
console.log(milk_required); // "hatsun"

let Milk= 'amul present';
let required= Milk ?? 'hatsun'; // since Milk is not null or undefined, milk required will be assigned 'amul present'
console.log(required); // "amul present"
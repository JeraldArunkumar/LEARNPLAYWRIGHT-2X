//map function is used to transform the array and create a new array based on the original array. It takes a callback function as an argument, which is applied to each element of the array, and returns a new array with the transformed values.

let numbers = [1, 2, 3, 4, 5];
let squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers); // output: [1, 4, 9, 16, 25]   

let scores = [90, 80, 70, 60];
let grade = scores.map(s =>s>70 ? 'Pass' : 'Fail');{
console.log(grade); // output: ['Pass', 'Pass', 'Fail', 'Fail']
}
// //filter function is used to create a new array with all elements that pass the test implemented 
// // by the provided function. It takes a callback function as an argument, which is applied to
// // each element of the array, and returns a new array with the elements that satisfy the condition.
let ages = [18, 25, 30, 15, 20];
let adults = ages.filter(age => age >= 18);
console.log(adults); // output: [18, 25, 30, 20]

//reduce function accumulates to single values from an array.
//  It takes a callback function as an argument, which is applied to each element of the array, 
// along with an optional initial value. 
// The callback function takes two arguments: the accumulator and the current value. 
//  The reduce function processes each element of the array and returns a single accumulated result.

let total=scores.reduce((a,b)=>a+b)
console.log(total)

//flat- flattens nested arrays
let nested=[[1,2],[6,7],[0,9]]
console.log(nested.flat())



//Add elements to an array
 let numbers = [1, 2, 3];
numbers.push(4, 5); // adds 4 and 5 to the end of the array
console.log(numbers); // output: [1, 2, 3, 4, 5]

numbers.unshift(10,9); // adds 10 and 9 to the beginning of the array
console.log(numbers); // output: [10, 9, 1, 2, 3, 4, 5]

//Remove elements from an array
 numbers.pop(); // removes the last element from the array
console.log(numbers); // output: [10, 9, 1, 2, 3, 4]

numbers.shift(); // removes the first element from the array
console.log(numbers); // output: [1, 2, 3, 4, 5]

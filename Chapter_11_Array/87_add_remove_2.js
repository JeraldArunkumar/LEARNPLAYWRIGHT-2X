let numbers = [1, 2, 3, 4, 5];
console.log(numbers); // output: [1, 2, 3, 4, 5]
//splice method to add and remove elements from an array
//add elements using splice method
numbers.splice(2, 0, 6, 7); // adds 6 and 7 at index 2 without removing any element
console.log(numbers); // output: [1, 2, 6, 7, 3, 4, 5]
//remove elements using splice method
numbers.splice(4, 2); // removes 2 elements starting from index 4
console.log(numbers); // output: [1, 2, 6, 7, 5]
numbers.splice(2,1,99); // replaces 1 element at index 2 with 99
console.log(numbers); // output: [1, 2, 99, 7, 5]
//Pure functions are functions that always return the same result for the same input and have no side effects. They do not modify any external state or rely on any external state.

// Example of a pure function
function add(a, b) {
    return a + b;
}   
console.log(add(2, 3)); // Output: 5
console.log(add(2, 3)); // Output: 5

// Example of an impure function
let count = 0;
function increment() {
    count++;
    return count;
}
console.log(increment()); // Output: 1
console.log(increment()); // Output: 2

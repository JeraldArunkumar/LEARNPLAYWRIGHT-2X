//iterate Go from one to another
let myArray = [1, 2, 3, 4, 5];
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}   

console.log('------------------');

//for...of loop (leanest for values )
for (let element of myArray) {
    console.log(element);
}   

console.log('------------------');
//for...in loop (leanest for keys)
for (let index in myArray) {
    console.log(index);
}  

let students = [ 'Alice', 'Bob', 'Charlie' ];
for (let index in students) {
    console.log(index); // Output: 0, 1, 2
    console.log(students[index]); // Output: Alice, Bob, Charlie
}

console.log('------------------');
myArray.forEach((element, index) => {
    console.log(element, index); 
});

//indexOf() method returns the index of the first occurrence of a specified value in a string or an array. It returns -1 if the value is not found.
//return -1 if the value is not found
let results=['pass','fail','pass','fail','pass'];
let index=results.indexOf('fail');
console.log(index); // 1
index=results.indexOf('fail',2);
console.log(index); // 3
index=results.indexOf('skip');
console.log(index); // -1
index=results.lastIndexOf('fail');
console.log(index); // 3


//Includes returns boolean value.
// results.includes('fail'); true
// results.includes('skip'); false

//find returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.
let nums =[1,2,3,4,5];
let x=nums.find(n=>n>2); // 3
console.log(x);
let y=nums.findIndex(n=>n>2); // 2
console.log(y);

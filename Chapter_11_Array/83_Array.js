let fruit=[];//empty array
let numbers = [1, 2, 3, 4, 5];
//length-5 and index-0 to 4
console.log(numbers[0]);
console.log(numbers[4]);//
console.log(numbers[5]);//undefined
numbers[5] = 6; //adding element at index 5
console.log(numbers[5]);
let mixedArray = [1, "hello", true, null, undefined, { name: "John" }, [1, 2, 3]];
console.log(mixedArray[1]);
console.log(mixedArray[5]);
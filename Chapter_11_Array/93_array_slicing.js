//slicing & combining
let i=[1,2,3,4,5,6]
//slice (start,end-1) gives new array - everything based on index value and end will be end-1

console.log(i.slice(1,3))//[2,3]
console.log(i.slice(2,6))//[3,4,5,6]
console.log(i.slice(3))//[4,5,6]-end not provided therefore it will print from start 
console.log(i.slice(-2))//starts from reverse [5,6]
console.log(i.slice(-2,1))// if you provide end value in minus then it will return empty 
console.log(i.slice(-2,-5))// if you provide end value in minus then it will return empty 


//usage if splice and slice ...splice will modify the original array elements

let x=[10,20,30,5,8]
let y=x.splice(1,4)
console.log(y)//[20,30,5,8]
console.log(x)//[10]
//slice will not modify the original array element as shown

let a=[10,20,30,5,8]
let b=a.slice(1,4)
console.log(b)//[20,30,5]
console.log(a)//[10,20,30,5,8]

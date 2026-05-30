

//concatenation is possible using concat function

let a=[10,12,13]
let b=[20,21,22]
let c= a.concat(b)
console.log(c)

//using spread also it is possible. this is modern way of doing using 3 dots
let d=[...a,...b]
console.log(d)//[10,12,13,20,21,22]

//Join 
let x=['fail','pass','skip'].join('-')
console.log(x)

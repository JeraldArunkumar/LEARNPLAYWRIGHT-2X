//check if somethings is array
let result=Array.isArray([1,2,3])
console.log(result)
let R1= Array.isArray('b')
console.log(R1)

//every is AND condition

let a=[200,300,100].every(s=>s>100)
let b=[200,300,102].every(s=>s>=100)
console.log(a)
console.log(b)

//some is OR condition
let c=[200,300,100].some(s=>s>100)
let d=[200,300,102].some(s=>s>=100)
console.log(c)
console.log(d)

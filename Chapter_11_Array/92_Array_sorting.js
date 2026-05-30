//lexicographic sorting method which will sort based on 1st character
let fruits=['banana','Grapes','Apple'];
fruits.sort()
console.log(fruits) 

let value=[3,1,5,2]
value.sort()
console.log(value)

let no=[21,1,3,31,11,14,14,123,235,25]
no.sort();
console.log(no)


// inorder to avoid such sorting we can use arrow method- this working fine for numbers

fruits.sort((a,b)=> a-b )
console.log(fruits)

no.sort((a,b)=> a-b )//ascending order
console.log(no)

no.sort((a,b)=> b-a )//descending order
console.log(no)

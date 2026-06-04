//searching and checking
let url='https://www.jerald.com'

//includes
console.log(url.includes('www')) //true
console.log(url.includes('www1')) //false

//startsWith
console.log(url.startsWith('https')) //true
console.log(url.startsWith('http')) //true
console.log(url.startsWith('www')) //false  
//indexOf
console.log(url.indexOf('www')) //8
console.log(url.indexOf('www1')) //-1   
//lastIndexOf
console.log(url.lastIndexOf('m')) //22
console.log(url.lastIndexOf('www1')) //-1

//search
console.log(url.search('www')) //8
console.log(url.search('www1')) //-1
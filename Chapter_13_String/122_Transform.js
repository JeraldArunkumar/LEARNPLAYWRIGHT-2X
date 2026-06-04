let str=" hello world! "
//toUpperCase
console.log(str.toUpperCase()) // HELLO WORLD!
//toLowerCase
console.log(str.toLowerCase()) // hello world!  
//trim - it will remove the whitespace from the beginning and end of the string
console.log(str.trim()) //hello world!
//trimStart - it will remove the whitespace from the beginning of the string
console.log(str.trimStart()) //hello world!
//trimEnd - it will remove the whitespace from the end of the string
console.log(str.trimEnd()) // hello world!

let message="TEST: FAIL, Retry: FAIL"
//replace - it will replace the first occurrence of the specified value with another value

console.log(message.replace('FAIL','PASS')) //TEST: PASS, Retry: FAIL
//replaceAll - it will replace all occurrences of the specified value with another value
console.log(message.replaceAll('FAIL','PASS')) //TEST: PASS, Retry: PASS
console.log(message.replace(/FAIL/g,'PASS')) //TEST: PASS, Retry: PASS - using regular expression with global flag to replace all occurrences of 'FAIL' with 'PASS'

//concatenation
"hello" + " " + "world" //hello world
let str1="hello"
let str2="world"
console.log(str1.concat(" ",str2)) //hello world
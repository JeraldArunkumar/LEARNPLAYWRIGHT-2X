//slice & substring
//slice will take negative index value but substring will not take negative index value

let str="Hello World"
console.log(str.slice(0,5)) //Hello - it will return the substring from index 0 to index 4 (5-1)
console.log(str.slice(6)) //World - it will return the substring from index 6 to the end of the string
console.log(str.slice(-5)) //World - it will return the substring from index -5 to the end of the string
console.log(str.slice(-11,-6)) //Hello - it will return the substring from index -11 to index -7 (-6-1)

//substring - substring(start,end) - it will return the substring from start index to end index (end-1) but it will not work with negative index values
console.log(str.substring(0,5)) //Hello - it will return the substring from index 0 to index 4 (5-1)
console.log(str.substring(6)) //World - it will return the substring from index 6 to the end of the string
console.log(str.substring(-5)) //'' - it will return an empty string if we provide a negative index value
console.log(str.substring(-11,-6)) //'' - it will return an empty string if we provide negative index values

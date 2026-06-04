let str='Hello, World!'
console.log(str.length) //13 ---lenght starts from 1
console.log(str[0]) //H- index starts from 0    
console.log(str[7]) //W
console.log(str.toUpperCase()) //HELLO, WORLD!'
console.log(str.at(-6)) //W - using at method we can also access the character from reverse using negative index value


console.log(str.charAt(0)) //H - using charAt method we can access the character but it will not work with negative index value
console.log(str.charAt(-1)) //'' - it will return empty string if we provide negative index value
console.log(str.charAt(100)) //'' - it will return empty string if we provide index value which is greater than the length of the string    
console.log(str.charCodeAt(0)) //72 - it will return the unicode value of the character at the specified index
console.log(str.charCodeAt(7)) //87 - it will return the unicode value of the character at the specified index
//in automation we are not going to use readline
// 69_nodejs.readline.js

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}); 
rl.question('Enter a number: ', (answer) => {
    const num = Number(answer); 

    if (num % 2 === 0) {
        console.log(`This is an even number: ${num}`);
    } else {
        console.log(`This is an odd number: ${num}`);
    }       
    rl.close();
});

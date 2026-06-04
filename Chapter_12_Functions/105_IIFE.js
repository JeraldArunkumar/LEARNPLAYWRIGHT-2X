//IIFE ( Immediately Invoked Function expression)- this is function which invokes itself
//this will be used in playwright

(function(){
console.log('Hi')
})()

//example of IIFE with arrow function. Mostly used for launching the browser in playwright
(()=>{
    console.log('Hi')
})()
let x='global';
console.log("Outside block: ",x); // Output: global 
if (true) {
  //  console.log(x); // Reference Error: Cannot access 'x' before initialization within the block
    let x = 'block';
    console.log("Inside block: ",x); // Output: block 
}
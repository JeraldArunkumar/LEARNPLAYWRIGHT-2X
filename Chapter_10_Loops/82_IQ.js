let count=10
while (count<5){
    console.log(count);//it will not print anything because the condition is false from the beginning and the code inside the while loop will not be executed even once.
    count++;
}

let j=4
do {
    console.log(j);//No increment here therefore will print 4 in infinite loop because the condition is checked after the execution of the block of code in do while loop.
    
}while (j<5);
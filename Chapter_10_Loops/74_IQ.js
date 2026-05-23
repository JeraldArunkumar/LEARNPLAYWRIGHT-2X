// for( let i=0; i>1; i++){//this loop will not execute because the condition i>1 is false at the start (i is initialized to 0).
// console.log(i);
// }
 
// for( let i=0;; i++){//this loop will execute infitnite.since there is no condition specified, it is treated as true by default, causing the loop to run indefinitely.
// console.log(i);
// }

    for (let Arun = 0; Arun <18; Arun++) {
        if (Arun>15) {
            console.log("Arun will get mobile");
        }
        else {
            console.log("Arun will not get mobile");
        }
    }

    for (let i=0; i<1; i++){
        console.log("This will be printed only once because the loop runs only for i=0, and then it stops since i becomes 1 which is not less than 1.");
    }
    
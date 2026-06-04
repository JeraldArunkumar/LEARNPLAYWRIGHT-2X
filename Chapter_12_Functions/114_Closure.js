function makeCounter(start=0) {
    let count = start;
    return  {
        increment() {count++},
        decrement() {count--},
        get() {return count;}
    };

}   
let counter = makeCounter(5);
console.log(counter.get()) //5
counter.increment()
counter.increment()
console.log(counter.get()) //7
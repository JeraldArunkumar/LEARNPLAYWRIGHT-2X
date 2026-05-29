let browser=["chrome", "firefox", "edge", "safari"];
console.log(browser); // output: ['chrome', 'firefox', 'edge', 'safari']
console.log(browser.length); // output: 4
console.log(browser[0]); // output: 'chrome'


browser.pop(   ); // removes the last element from the array
console.log(browser); // output: ['chrome', 'firefox', 'edge']

let removedBrowser = browser.shift(); // removes the first element and returns it
console.log(removedBrowser); // output: 'chrome'
console.log(browser); // output: ['firefox', 'edge', 'safari']

for(let i=0; i<browser.length; i++){
    console.log(browser[i]);
    if(browser[i] === "edge"){
        console.log("Found edge browser");
    }
}
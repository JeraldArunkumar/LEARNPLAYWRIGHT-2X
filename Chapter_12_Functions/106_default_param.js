//this default param function is borrowed from python

function retry(testname,retries=3,delay=1000) {
    console.log(`Running test ${testname} with ${retries} retries and ${delay}ms delay`);   
}
retry("Test1");
retry("Test2",5);
retry("Test3",5,2000);

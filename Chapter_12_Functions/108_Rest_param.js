//Aarray of objects as rest param

function runtests(testname,...results) {
    console.log(`Running test ${testname} with results:`);
    console.log(results);
}
runtests("Test1",'Hello', 'World');
runtests("Test2", 'Hello', 'World', 'How', 'are', 'you');
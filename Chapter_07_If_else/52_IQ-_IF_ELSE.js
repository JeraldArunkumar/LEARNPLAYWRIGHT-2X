if ('hello') console.log('This will be printed because "hello" is a non-empty string and is truthy.');
if (42) console.log('This will be printed because 42 is a non-zero number and is truthy.');
if (true) console.log('This will be printed because true is truthy.');  


if (0) console.log('This will not be printed because 0 is falsy.');
if (null) console.log('This will not be printed because null is falsy.');
if (undefined) console.log('This will not be printed because undefined is falsy.');
if (false) console.log('This will not be printed because false is falsy.'); 
if ('') console.log('This will not be printed because an empty string is falsy.');
if (NaN) console.log('This will not be printed because NaN is falsy.');



let name=undefined;
if (name) {
    console.log('Name is defined and truthy');
} else {
    console.log('Name is either undefined, null, or falsy');
}
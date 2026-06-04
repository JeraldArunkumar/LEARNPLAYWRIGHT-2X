function makeretry(max) {
    let attempts = 0;
    function retry(testname) {
        attempts++;
        if (attempts > max) {
            return (`Test ${testname} reaches max ${max} attempts.`);
        }
        return (`attempts ${attempts}/${max}, for test ${testname} `);
    }
    return retry;
}

let fn_retry = makeretry(3);
console.log(fn_retry("1"));
console.log(fn_retry("2"));
console.log(fn_retry("3"));
console.log(fn_retry("4"));



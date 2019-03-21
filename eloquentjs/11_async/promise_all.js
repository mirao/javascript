function Promise_all(promises) {
    return new Promise((resolve, reject) => {
        let results = [];
        const len = promises.length;
        for (let i = 0; i < len; i++) {
            // Create promise from non promise value if needed
            if (!(promises[i] instanceof Promise)) {
                promises[i] = Promise.resolve(promises[i]);
            }
            promises[i].then(result => {
                results[i] = result;
                // Quite ugly check if all results are assigned
                // Alternative is using of counter (pending--)
                if (results.filter(elem => elem != undefined).length == len) resolve(results);
            }).catch(reject);
        }
        if (len == 0) resolve(results);
    });
}


// Test code.
Promise_all([]).then(array => {
    console.log("This should be []:", array);
});
function soon(val) {
    return new Promise(resolve => {
        setTimeout(() => resolve(val), Math.random() * 500);
    });
}
Promise_all([5, soon("caues"), true]).then(array => {
    console.log("This should be 5, \"caues\", true:", array);
});
Promise_all([soon(1), soon(2), soon(3)]).then(array => {
    console.log("This should be [1, 2, 3]:", array);
});

Promise_all([soon(1), Promise.reject("X"), soon(3)]).then(() => {
    console.log("We should not get here");
}).catch(error => {
    if (error != "X") {
        console.log("Unexpected failure:", error);
    }
});
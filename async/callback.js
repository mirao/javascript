console.log("Starting..");

function resolveAfter2Seconds() { 
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            console.log("This runs after 2000 milliseconds.");
            resolve();
        }, 2000);
    });
    return promise;
}

(async () => {
    // Wait 2 x 2 sec using await
    await resolveAfter2Seconds(); // Wait for 2 sec
    console.log("Awaiting 1");
    await resolveAfter2Seconds(); // Wait for 2 sec
    console.log("Awaiting 2");

    // Alternative waiting approach, again 2 x 2 sec
    resolveAfter2Seconds()
        .then(() => { console.log("Promise waiting 1"); return resolveAfter2Seconds();}) // Wait for 2 sec
        .then(() => console.log("Promise waiting 2")) // Wait for 2 sec
        .then(() => 
            // Another alternative using callbacks
            setTimeout(function() {
                console.log("Callback waiting 1");
                setTimeout(function() {
                    console.log("Callback waiting 2");
                    setTimeout(function() {
                        console.log("Callback waiting 3");
                    }, 2000);
                }, 2000);
            }, 2000)
        );
})();

console.log("Not really ending .."); // This one doesn't wait at all

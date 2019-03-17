console.log("Starting..");

function resolveAfter2Seconds() { 
    const promise = new Promise(resolve => {
        setTimeout(() => {
            console.log("This runs after 2000 milliseconds.");
            resolve();
        }, 2000);
    });
    return promise;
}

(async () => {
    // Wait 2 x 2 sec
    await resolveAfter2Seconds(); // Wait for 2 sec
    console.log("End of waiting 1");
    await resolveAfter2Seconds(); // Wait for 2 sec
    console.log("End of waiting 2");

    // Alternative waiting approach, again 2 x 2 sec
    resolveAfter2Seconds()
        .then(() => { console.log("End of waiting 3"); return resolveAfter2Seconds();}) // Wait for 2 sec
        .then(() => console.log("End of waiting 4")); // Wait for 2 sec
})();

console.log("Not really ending .."); // This one doesn't wait at all

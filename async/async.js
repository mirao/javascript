// Async/Await
const asyncGreeting = async () => "Greetings Async";

// Promises
const promiseGreeting = () => new Promise(((resolve) => {
    resolve("Greetings Promise");
}));

// Combination of sync/async calls
const myAsync = async () => {
    console.log("Hello 3"); // Sync call, 1st output
    console.log(asyncGreeting() + 3); // Sync call, 2nd output
    console.log(await asyncGreeting() + 3); // Async call, 5th output
};

asyncGreeting().then(result => console.log(result)); // Async call, 3rd output
promiseGreeting().then(result => console.log(result)); // Async call, 4th output
myAsync();

function resolveAfter2Seconds(x) { 
    const promise = new Promise(resolve => {
        setTimeout(() => {
            resolve(x);
        }, 2000);
    });
    return promise;
}
  
async function f1() {
    const x = await resolveAfter2Seconds(10);
    console.log(x); // 10
}
f1();

async function f3() {
    try {
        await Promise.reject(30);
    } catch(e) {
        console.log(e); // 30
    }
}
f3();

async function f2() {
    var y = await 20;
    console.log(y); // 20
}
f2();

(async () => {
    const response = await f3().catch((err) => { console.log(err); });
    // response will be undefined if the promise is rejected
    console.log(response);
})();
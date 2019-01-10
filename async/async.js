// Async/Await
const asyncGreeting = async () => "Greetings Async";
// Promises
const promiseGreeting = () => new Promise(((resolve) => {
    resolve("Greetings Promise");
}));
asyncGreeting().then(result => console.log(result));
promiseGreeting().then(result => console.log(result));

const myAsync = async () => {
    console.log("Hello 3");
    console.log(asyncGreeting() + 3);
    console.log(await asyncGreeting() + 3);
};
myAsync();
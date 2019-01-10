console.log("Starting..");
const promiseFunction = new Promise((resolve) => {
    setTimeout(() => {
        console.log("This runs after 1000 milliseconds.");
    }, 1000);    
    const add = () => {throw Error(); };
    resolve(add(2, 2));
});
promiseFunction.then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(`Something bad happened: ${error}`);
});
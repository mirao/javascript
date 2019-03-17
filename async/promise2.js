const resolveAfter2Seconds = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, 500);
    });
};

resolveAfter2Seconds()
    .then(() => { console.log("resolved"); })        // this gets executed 
    .catch(() => { console.log("some error"); });    // this does not get executed

const rejectAfter2Seconds = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject();
        }, 500);
    });
};

rejectAfter2Seconds()
    .then(() => { console.log("resolved"); })        // this does not get executed
    .catch(() => { console.log("some error"); });    // this gets executed

const resolveAfterXSeconds = (ms) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(ms);
        }, ms);
    });
};
      
resolveAfterXSeconds(2000)
    .then((ms) => { console.log(`resolved after ${ms}`); });
resolveAfterXSeconds(1000)
    .then((ms) => { console.log(`resolved after ${ms}`); });

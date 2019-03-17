const resolveAfterXSeconds = (ms) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(ms);
        }, ms);
    });
};
  
const concurrentStart = async () => {
  
    const first = resolveAfterXSeconds(4000); // Wait 4 sec
    const second = resolveAfterXSeconds(2000); // No other wait, it already waited within previous 4 sec
    console.log(await first);
    console.log(await second);

    console.log(await resolveAfterXSeconds(4000)); // Wait 4 sec
    console.log(await resolveAfterXSeconds(2000)); // Wait 2 sec
};

concurrentStart();
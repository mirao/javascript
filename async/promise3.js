const resolveAfterXSeconds = (ms) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(ms);
        }, ms);
    });
};

resolveAfterXSeconds(3000)
    .then((ms) => { 
        console.log("1promise in the first then");
  
        resolveAfterXSeconds(1000).then((ms) => { console.log(`1resolved after ${ms}`); });
  
        return ms;
    }).then((ms) => { console.log(`1resolved after ${ms}`); });


resolveAfterXSeconds(2000)
    .then((ms) => { 
        console.log("2promise in the first then");
        console.log(`2resolvedx after ${ms}`);
  
        return resolveAfterXSeconds(1000);
    }).then((ms) => { console.log(`2resolved after ${ms}`); });
  
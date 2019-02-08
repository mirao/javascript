// import {bigOak} from "./crow-tech";

const cache = {
    text: "Cache hit"
};

const readStorage = (cache, callback) => {
    const {text} = cache;
    setTimeout(() => callback(text + 1), 1000); // Wait a sec
    callback(text + 2);
};

readStorage(cache, (info) => {
    console.log(info);
});

console.log("Anything");
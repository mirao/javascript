const box = {
    locked: true,
    unlock() { this.locked = false; },
    lock() { this.locked = true; },
    _content: [],
    get content() {
        if (this.locked) throw new Error("Locked!");
        return this._content;
    }
};

function withBoxUnlocked(body) {
    const isLockedLastTime = box.locked;
    box.unlock();
    try {
        body();
    } finally {
        if (isLockedLastTime) {
            box.lock() // Lock box only if it was locked originally
        }
    }
}

withBoxUnlocked(function () {
    box.content.push("gold piece");
});

console.log(box._content);
try {
    withBoxUnlocked(function () {
        throw new Error("Pirates on the horizon! Abort!");
    });
} catch (e) {
    console.log("Error raised:", e);
}
console.log(box._content);
console.log(box.locked);
// → true

box.unlock();

withBoxUnlocked(function () {
    box.content.pop();
    box.content.push("coin");
    console.log(box.content);
});
console.log(box.locked);
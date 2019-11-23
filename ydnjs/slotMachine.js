function randMax(max) {
    return Math.trunc(1E9 * Math.random()) % max;
}

var reel = {
    symbols: ["♠", "♥", "♦", "♣", "☺", "★", "☾", "☀"],
    spin() {
        if (this.position == null) {
            this.position = randMax(this.symbols.length - 1);
        }
        this.position = (
            this.position + 100 + randMax(100)
        ) % this.symbols.length;
    },
    display() {
        if (this.position == null) {
            this.position = randMax(this.symbols.length - 1);
        }
        return this.symbols[this.position];
    }
};

var slotMachine = {
    reels: [
        // this slot machine needs 3 separate reels
        // hint: Object.create(..)
        Object.create(reel),
        Object.create(reel),
        Object.create(reel),
    ],

    spin() {
        this.reels.forEach(function spinReel(reel) {
            reel.spin();
        });
    },

    display() {
        const reelsPositions = [[], [], []];
        this.reels.forEach((reel) => {
            reelsPositions[0].push(Object.create(reel));
            reelsPositions[2].push(Object.create(reel));
        });

        reelsPositions[1] = this.reels;

        reelsPositions.forEach((reels, position) => {
            let output = [];
            reels.forEach((reel, slot) => {
                if (position === 0) {
                    reel.position = (this.reels[slot].position + this.reels[slot].symbols.length - 1) % this.reels[slot].symbols.length;
                } else if (position === 2) {
                    reel.position = (this.reels[slot].position + 1) % this.reels[slot].symbols.length;
                }
                output.push(reel.display());
            });
            console.log(output.join(" | "));
        });
    }
};

slotMachine.spin();
slotMachine.display();
// ☾ | ☀ | ★
// ☀ | ♠ | ☾
// ♠ | ♥ | ☀

console.log("---------");
slotMachine.spin();
slotMachine.display();
// ♦ | ♠ | ♣
// ♣ | ♥ | ☺
// ☺ | ♦ | ★

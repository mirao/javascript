function minusOne(match, amount, unit) {
    amount = Number(amount) - 1;
    if (amount == 1) { // only one left, remove the 's'
    unit = unit.slice(0, unit.length - 1);
} else if (amount == 0) {
    amount = "no";
}
return amount + " " + unit;
}

// → no lemon, 1 cabbage, and 100 eggs
console.log("1 lemon, 2 cabbages, and 101 eggs".replace(/(\d+) (\w+)/g, minusOne));
console.log("510 bananas".replace(/(\d+) (\w+)/g, minusOne));
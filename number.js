function addPrefix1(num) {
    for (var index = 0, rest = num; rest > 0; index++) {
        rest = Math.trunc(rest / 10);
    }
    return Math.pow(10, index) + num;
}

console.log(addPrefix1(236));
console.log(addPrefix1(1));
console.log(addPrefix1(77));
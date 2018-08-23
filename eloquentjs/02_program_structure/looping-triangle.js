// Print triangle
let row = "";
for (let i = 0; i < 7; i++) {
    row += "#"
    console.log(row);
}

// Alternative solution
for (let i = 1; i <= 7; i++) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write("#");
    }
    console.log();
}
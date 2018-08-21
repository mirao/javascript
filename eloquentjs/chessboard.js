/**
 * Prints chessboard
 */

let size = 8
let firstChar = " ";
for (let row = 1; row <= size; row++) {
    let nextChar = firstChar;
    let output = "";
    for (let col = 1; col <= size; col++) {
        output += nextChar;
        nextChar = (nextChar === " ") ? "#" : " ";
    }
    console.log(output);
    firstChar = (firstChar === " ") ? "#" : " ";
}
/**
 * Universal "for" loop
 * @param {number} value 
 * @param {Function} testFunc 
 * @param {Function} updateFunc 
 * @param {Function} bodyFunc 
 */
function loop(value, testFunc, updateFunc, bodyFunc) {
    for (let index = value; testFunc(index); index = updateFunc(index)) {
        bodyFunc(index);
    }
}

// Print 3, 2, 1
loop(3, n => n > 0, n => n - 1, console.log);

let a = [];
// Create array [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
loop(0, n => n < 10, n => n + 1, val => a.push(val));
console.log(a);
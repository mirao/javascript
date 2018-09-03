/**
 * Every using foor loop
 * @param {Array} array 
 * @param {Function} test 
 */
function everyLoop(array, test) {
    for (const elem of array) {
        if (!test(elem)) {
            return false;
        }
    } 
    return true;
}

/**
 * Every using some
 * @param {Array} array 
 * @param {Function} test 
 */
function everySome(array, test) {
    return !array.some(elem => !test(elem));
}

console.log(everyLoop([1, 3, 5], n => n < 10));
// → true
console.log(everyLoop([2, 4, 16], n => n < 10));
// → false
console.log(everyLoop([], n => n < 10));
// → true

console.log(everySome([1, 3, 5], n => n < 10));
// → true
console.log(everySome([2, 4, 16], n => n < 10));
// → false
console.log(everySome([], n => n < 10));
// → true
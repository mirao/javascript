// Takes 4 sec for array with 100000 integers 
function reverseArray(array) {
    let reversedArray = [];
    for (let elem of array) {
        reversedArray.unshift(elem);
    }
    return reversedArray;
}

// Takes 7 milisec for array with 100000 integers
function reverseArrayInPlace(array) {
    for (let i = 0; i < (array.length - 1) / 2; i++) {
        // Swap elements having opposite position in array
        [array[i], array[array.length - i - 1]] = [array[array.length - i - 1], array[i]];
    }
}

// Alternative in-place reverse
// Takes 15 sec for array with 100000 integers
function reverseArrayInPlace2(array) {
    for (let i = 0; i < array.length; i++) {
        let elem = array.shift();
        array.splice(array.length - i, 0, elem);
    }
}

console.log(reverseArray(orig = ["A", "B", "C"]));
console.log('Orig array:', orig); // Not changed by previous reverting

let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);

arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace2(arrayValue);
console.log(arrayValue);
/**
 * Returns true if two values (objects, strings etc.) have the same content
 * @param {*} a 
 * @param {*} b 
 */

function deepEqual(a, b) {
    if (
        typeof a != 'object'
        || a === null
        || b === null
    ) {
        return a === b;
    }

    // Check if object isn't compared with array, as e.g. {0:6} != [6]
    if (Array.isArray(a) != Array.isArray(b)) {
        return false
    }

    // Check if objects have the same number of keys
    if (Object.keys(a).length != Object.keys(b).length) {
        return false;
    }

    // Compare content of value for every key
    for (const key of Object.keys(a)) {
        if (!deepEqual(a[key], b[key])) {
            return false;
        }
    }
    return true;
}

console.log(deepEqual('a', 'a'));
console.log(deepEqual('a', 'A'));
let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
console.log(deepEqual([6], {0:6}));
console.log(deepEqual(null, 0));
console.log(deepEqual([2, 7, [5, {a: ['j'], b: 11, c: 2}]], [2, 7, [5, {c: 2, b: 11, a: ['j']}]]));
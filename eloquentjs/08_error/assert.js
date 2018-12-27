const assert = require('assert');

/**
 * Assert without 'assert' module
 */
function firstElement1(array) {
    if (array.length == 0) {
        throw new Error("firstElement called with []");
    }
    return array[0];
}

/**
 * Assert with 'assert' module
 */
function firstElement2(array) {
    assert.notStrictEqual(array.length, 0);
    return array[0];
}

try {
    firstElement1([]);
} catch(e) {
    console.log(e.constructor.name);
} finally {
    try {
        firstElement2([]);
    } catch (e) {
        console.log(e.constructor.name);
    }
}
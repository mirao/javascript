function arrayToList(array) {
    const list = {};
    list.value = array.shift();
    if (array.length == 0) {
        list.rest = null;
    } else {
        list.rest = arrayToList(array);
    }
    return list;
}

function listToArray(list) {
    if (list.rest === null) {
        return [list.value]; 
    } else {
        array = listToArray(list.rest);
        array.unshift(list.value);
        return array;
    }
}

function prepend(elem, list) {
    return {
        value: elem,
        rest: list
    };
}

function nth(list, position) {
    if (list === null) {
        return undefined;
    }
    if (position == 0) {
        return list.value;
    } else {
        return nth(list.rest, position - 1);
    }
}

console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 0));
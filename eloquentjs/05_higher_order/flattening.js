function flattened(arrays) {
    return arrays.reduce((arr1, arr2) => arr1.concat(arr2), []);
}

console.log(flattened([[1, 2, 3], [4, 5], [6]]));
console.log(flattened([[6, 2]]));
console.log(flattened([[100]]));
console.log(flattened([[]]));
console.log(flattened([])); // Inital value [] in function allows flattening of empty array
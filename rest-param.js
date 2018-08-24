function max(...numbers) {
    let result = -Infinity;
    for (let number of numbers) {
      if (number > result) result = number;
    }
    return result;
}
console.log(max(2, ...[4, 1, 9], 8));
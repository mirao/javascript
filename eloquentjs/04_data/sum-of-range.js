function range(start, end, step = 1) {
    const numbers = [];
    for (let i = start; start <= end ? i <= end : i >= end; i += step) {
        numbers.push(i);
    }
    return numbers;
}

function sum(numbers) {
    let sum = 0;
    for (const num of numbers) {
        sum += num;
    }
    return sum;
}

console.log(range(1, 10));
console.log(range(5, 2, -1));
console.log(range(1, 10, 2));
console.log(sum(range(1, 10)));

/**
 * Generate range from start/end number
 * @param {number} start 
 * @param {number} end 
 */
function range(start, end) {

    const numbers = function (end) {
        const numbers = [];
        for (let i = start; i <= end; i++) {
            numbers.push(i);
        }
        console.log(numbers);
        return numbers;

    };

    if (end == undefined) {
        return numbers;
    } else {
        numbers(end);
    }
}

range(3, 3);    // [3]
range(3, 8);    // [3,4,5,6,7,8]
range(3, 0);    // []

var start3 = range(3);
var start4 = range(4);

start3(3);     // [3]
start3(8);     // [3,4,5,6,7,8]
start3(0);     // []

start4(6);     // [4,5,6]

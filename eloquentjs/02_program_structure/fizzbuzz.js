/**
 * Prints "Fizz" for numbers divisible by 3
 * Prints "Buzz" for numbers divisible by 5
 * Prints "FizzBuzz" for numbers divisible by 3 and 5
 * Prints number value for other numbers
 */

const FIZZ = 'Fizz'
const BUZZ = 'Buzz'

for (let num = 1; num <= 100; num++) {
    if (num % 3 === 0) {
        if (num % 5 === 0) {
            console.log(FIZZ + BUZZ)
        } else {
            console.log(FIZZ)
        }
    } else if (num % 5 === 0) {
        console.log(BUZZ)
    } else {
        console.log(num);
    }
}
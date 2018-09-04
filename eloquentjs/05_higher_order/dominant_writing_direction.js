const higherOrder = require('./higher_order_functions');

function dominantDirection(text) {

}

console.log(higherOrder.countBy([5, 2, 4, 6, 50, 3, 10, 11], elem => {
    if (elem >= 2 && elem <= 5) {
        return 'low';
    }
    if (elem > 5 && elem <= 11) {
        return 'middle';
    }
    if (elem > 11) {
        return 'high';
    }
}));

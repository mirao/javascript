/**
 * Swap variables
 */ 

let a = 2, b = 3;

// ES5+
b =
(
    function(a)
    {
        return a
    }
)
(a, a=b);

// ES6
b = (a=>a)(a,a=b);
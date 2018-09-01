function repeat(n, fnc) {
    for (let i = 0; i < n; i++) {
        fnc(i);
    }
}

repeat(5, console.log);

// Bind solution
let a = [];
repeat(5, a.push.bind(a));
console.log(a);

// ECMAScript 2015 solution
a = [];
repeat(5, i => a.push(i));
console.log(a);
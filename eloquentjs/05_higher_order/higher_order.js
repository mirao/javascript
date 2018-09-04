require('./scripts');
var higherOrder = require('./higher_order_functions');

console.log(higherOrder.filter(SCRIPTS, script => script.living));
// console.log(SCRIPTS.filter(script => script.living));
// console.log(SCRIPTS.filter(s => s.direction == "ttb"));

let rtlScripts = SCRIPTS.filter(s => s.direction == "rtl");
console.log(higherOrder.map(rtlScripts, s => s.name));
// console.log(rtlScripts.map(s => s.name));

console.log(higherOrder.reduce([1, 2, 3, 4], (a, b) => a + b, 0));
console.log([1, 2, 3, 4].reduce((a, b) => a + b, 0));

console.log(SCRIPTS.reduce((a, b) => {
    return higherOrder.characterCount(a) < higherOrder.characterCount(b) ? b : a;
}));

let biggest = null;
for (let script of SCRIPTS) {
  if (biggest == null ||
    higherOrder.characterCount(biggest) < higherOrder.characterCount(script)) {
    biggest = script;
  }
}
console.log(biggest);

console.log(higherOrder.characterScript(121));
// → {name: "Latin", …}

console.log(higherOrder.countBy([1, 2, 3, 4, 5], n => n > 2));
// → [{name: false, count: 2}, {name: true, count: 3}]
    
console.log(higherOrder.textScripts('英国的狗说"woof", 俄罗斯的狗说"тяв"'));
// → 61% Han, 22% Latin, 17% Cyrillic
const math = require('mathjs')

a = math.add(math.fraction("-9.4'31'"), math.fraction("0.1'1'"));
b = math.add(math.fraction("0.1"), math.fraction("0.2"));
console.log(a);
console.log(b);
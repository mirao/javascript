const {formatDate} = require("./format-date");

console.log(formatDate(new Date(2017, 9, 13), "dddd the Do", "cs"));
// → Friday the 13th
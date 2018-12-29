const regExps = [/\w/, /\d/];
const str = "M7y 1str0ing";
console.log(str.match(regExps[Math.floor(Math.random() * 2)]));
[1, 5, 7, 0].forEach(element => {
    console.log(str.match(new RegExp(String(element))));
});
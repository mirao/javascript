require('./scripts');
require('./scripts');
const {countBy, characterScript} = require('./higher_order_functions');

/**
 * Returns dominant writing direction of text 
 * @param {string} text 
 */
function dominantDirection(text) {
    let dirCount = countBy(text, chr => {
        let script = characterScript(chr.codePointAt());
        
        return  script === null ? "none" : script.direction;
    }).filter(({name}) => name !== "none");

    let max = -Infinity;
    let dominantDir = 'none';
    for (const {name, count} of dirCount) {
        if (count > max) {
            max = count;
            dominantDir = name;
        }        
    }

    return dominantDir;
}

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl
console.log(dominantDirection("ތާނަřéa"));
// → rtl because Thaana chars are double chars
console.log(dominantDirection("Mongolskyᠴᠣᠷᠢ ᠶᠢᠨ ᠭᠠᠭᠴᠠ ᠪᠣᠰᠤᠭ᠎ᠠ ᠪᠢᠴᠢᠭ᠄ ᠮᠣᠩᠭᠣᠯ ᠪᠢᠴᠢᠭ"));
// → ttb
console.log(dominantDirection("!"));
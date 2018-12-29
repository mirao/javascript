function parseINI(string) {
    // Start with an object to hold the top-level fields
    let result = {};
    let section = result;
    string.split(/\r?\n/).forEach(line => {
        let match;
        if (match = line.match(/^([\w.]+)\s*=\s*(.*)$/)) {
            section[match[1]] = match[2];
        } else if (match = line.match(/^\[(.*)\]$/)) {
            section = result[match[1]] = {};
        } else if (!/^\s*(;.*)?$/.test(line)) {
            throw new Error("Line '" + line + "' is not valid.");
        }
    });
    return result;
}

// Simple INI file
console.log(parseINI(`
; each section concerns an individual enemy
[larry]
fullname=Larry Doe
`));

// Complex INI file
const fs = require("fs");
const data = fs.readFileSync('/etc/php/7.2/cli/php.ini').toString();
console.log(parseINI(data));
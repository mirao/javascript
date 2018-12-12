"use strict";

// SyntaxError: Strict mode code may not include a with statement
with ({name: "Mira"}) {
    console.log(name);
}
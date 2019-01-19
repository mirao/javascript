// It uses the feature 'import' in ES2015
// ESM is loaded using NPM module 'esm'
// Run the script as "node -r esm my_client.mjs"

import getYear, { parts as yearParts } from "./my_package.js";

console.log(yearParts);
console.log(getYear());

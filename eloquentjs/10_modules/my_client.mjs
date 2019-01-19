// It uses the feature 'import' in ES2015
// Run the script as "node --experimental-modules my_client.mjs"

import getYear, { parts as yearParts } from "./my_package.mjs";

console.log(yearParts);
console.log(getYear());

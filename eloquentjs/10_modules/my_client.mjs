// It uses the feature 'import' in ES2015
// run it as "node --experimental-modules my_client.mjs"

import getYear, { sparts as yearParts } from "./my_package.mjs";

console.log(yearParts);
console.log(getYear());

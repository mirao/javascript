let text = "'I'm the cook,' he said, 'it's my job.'";
console.log(text.replace(/(^|\W)'|'(\W|$)/g, '$1"$2'));
// Alternative using look behind and look ahead regexp
console.log(text.replace(/(?<!\w)'|'(?!\w)/g, '"'));

// → "I'm the cook," he said, "it's my job."
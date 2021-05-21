// below is a different way to import a module (in our case fs - filesystem)
// it is the same as const fs = require('fs') and than use the readFileSync Method
// as fs.readFileSync , it is just an alternative way

const { readFileSync, writeFileSync } = require('fs');

const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');

// u need the utf-8 at the end, cause otherwise u get the Buffer in machine code

console.log(first, second);

writeFileSync(
	'./content/result-sync.txt',
	`Here is the result:  ${first}, ${second}`,
	{ flag: 'a' }
);

// node creates this file if it is not there, if it already exists, it will override
// the file with the new content. But if we add a flag, it will add to the existing
// content

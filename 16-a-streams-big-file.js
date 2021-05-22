// creating a big file as prep for the streaming examples

const { writeFileSync } = require('fs');

for (let i = 0; i < 20000; i++) {
	writeFileSync('./content/big.txt', `Hello World ${i}\n`, { flag: 'a' });
}

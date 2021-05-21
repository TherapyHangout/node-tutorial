// const { readFile, writeFile } = require('fs');
// const util = require('util');

// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

// const start = async () => {
// 	try {
// 		const first = await readFilePromise('./content/first.txt', 'utf8');
// 		const second = await readFilePromise('./content/second.txt', 'utf-8');
// 		await writeFilePromise(
// 			'./content/result-mind-grenade',
// 			`THIS IS BLOWMINDING: ${first} ${second}`
// 		);
// 		console.log(first, second);
// 	} catch (error) {
// 		console.log(error);
// 	}
// };

// start();

// so far so now
// it gets even easier than the above example
// we can get rid of the util stuff alltogether if we add
// .promises at the end of our module import

const { readFile, writeFile } = require('fs').promises;

const start = async () => {
	try {
		const first = await readFile('./content/first.txt', 'utf8');
		const second = await readFile('./content/second.txt', 'utf-8');
		await writeFile(
			'./content/result-mind-grenade',
			`THIS IS BLOWMINDING: ${first} ${second}`
		);
		console.log(first, second);
	} catch (error) {
		console.log(error);
	}
};

start();

// now to the asynchronous methods

const { readFile, writeFile } = require('fs');
console.log('start');

// we need a call back function that runs when the processing of our methods
// is complete

readFile('./content/first.txt', 'utf-8', (err, result) => {
	if (err) {
		console.log(err);
		return;
	}
	console.log(result);
	const first = result;
	readFile('./content/second.txt', 'utf-8', (err, result) => {
		if (err) {
			console.log(err);
			return;
		}
		console.log(result);
		const second = result;
		// the {flag:'a'} is optional
		writeFile(
			'./content/result-async.txt',
			`Here is the result: ${first}, ${second}`,
			(err, result) => {
				if (err) {
					console.log(err);
					return;
				}
				console.log('done with task');
			}
		);
	});
});

console.log('starting new task');

// but as u see, we have a call-back-hell but there will be an alternative

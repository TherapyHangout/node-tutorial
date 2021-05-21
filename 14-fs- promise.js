const { readFile } = require('fs');

readFile('./content/first.txt', 'utf-8', (err, data) => {
	if (err) {
		return;
	} else {
		console.log(data);
	}
});

// so far so normal, now we replace the callback with a promise

const getText = (path) => {
	return new Promise((resolve, reject) => {
		readFile(path, 'utf-8', (err, data) => {
			if (err) {
				reject(err);
			} else {
				resolve(data);
			}
		});
	});
};

getText('./content/first.txt')
	.then((result) => {
		console.log(result);
	})
	.catch((err) => {
		console.log(err);
	});

// this is a much neater way to use asynchronous tasks in node
// instead of a callback function but this is also not the
// right way to escape callback hell
// therefor we use await in the next file
